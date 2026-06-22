// TRION Agency — Favicon & OG Image Generator
// Run: node generate-favicons.js
// No external dependencies.
'use strict';
const fs   = require('fs');
const path = require('path');
const zlib = require('zlib');
const OUT  = __dirname;

// ── CRC32 ─────────────────────────────────────────────────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

// ── PNG ENCODER ───────────────────────────────────────────────────────────────
function pngChunk(type, data) {
  const tb = Buffer.from(type, 'ascii');
  const lb = Buffer.allocUnsafe(4); lb.writeUInt32BE(data.length, 0);
  const cb = Buffer.allocUnsafe(4); cb.writeUInt32BE(crc32(Buffer.concat([tb, data])), 0);
  return Buffer.concat([lb, tb, data, cb]);
}
function createPNG(w, h, rgba) {
  const sig  = Buffer.from([137,80,78,71,13,10,26,10]);
  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(w,0); ihdr.writeUInt32BE(h,4);
  ihdr[8]=8; ihdr[9]=6; ihdr[10]=ihdr[11]=ihdr[12]=0;
  const rows = [];
  for (let y = 0; y < h; y++) {
    const row = Buffer.allocUnsafe(1 + w*4); row[0]=0;
    for (let x = 0; x < w; x++) {
      const [r,g,b,a] = rgba(x,y,w,h);
      const i = 1+x*4; row[i]=r; row[i+1]=g; row[i+2]=b; row[i+3]=a;
    }
    rows.push(row);
  }
  const compressed = zlib.deflateSync(Buffer.concat(rows), { level:9 });
  return Buffer.concat([sig, pngChunk('IHDR',ihdr), pngChunk('IDAT',compressed), pngChunk('IEND',Buffer.alloc(0))]);
}

// ── SDF HELPERS ───────────────────────────────────────────────────────────────
function smoothstep(e0,e1,x) {
  const t = Math.max(0,Math.min(1,(x-e0)/(e1-e0)));
  return t*t*(3-2*t);
}

// Rounded rect, centre (cx,cy), half-extents (hw,hh), corner radius r
function sdRoundedRect(px,py,cx,cy,hw,hh,r) {
  const qx=Math.abs(px-cx)-hw+r, qy=Math.abs(py-cy)-hh+r;
  return Math.hypot(Math.max(qx,0),Math.max(qy,0)) + Math.min(Math.max(qx,qy),0) - r;
}

// Capsule (line segment with round caps): from (ax,ay) to (bx,by), radius r
function sdCapsule(px,py,ax,ay,bx,by,r) {
  const pax=px-ax, pay=py-ay, bax=bx-ax, bay=by-ay;
  const h = Math.max(0,Math.min(1,(pax*bax+pay*bay)/(bax*bax+bay*bay)));
  return Math.hypot(pax-bax*h, pay-bay*h) - r;
}

// ── TRION "T" MARK ────────────────────────────────────────────────────────────
// Thin-stroke, round caps — matches the actual TRION logo letterform.
// Color: Mist white (#E8EAED) on Obsidian (#121418) — same as brand logo.
function getTPixel(x,y,w,h) {
  const px=x+0.5, py=y+0.5;
  const aa = Math.max(0.6, w/80); // anti-alias softness, scales with icon size

  // Rounded square background (corner radius ~16% of size)
  const bgSdf = sdRoundedRect(px,py, w/2,h/2, w/2,h/2, w*0.16);
  if (bgSdf > aa) return [0,0,0,0]; // transparent outside

  const bgA = bgSdf < -aa ? 255 : Math.round(smoothstep(aa,-aa,bgSdf)*255);

  // Stroke radius: thin but legible at all sizes (min 1.1px)
  const r = Math.max(1.1, w * 0.031);

  // T dimensions (normalised to icon size)
  const crossY  = h * 0.290;   // crossbar y position
  const stemBot = h * 0.790;   // stem bottom
  const left    = w * 0.130;   // crossbar left cap
  const right   = w * 0.870;   // crossbar right cap
  const mid     = w * 0.500;   // stem x center

  const tSdf = Math.min(
    sdCapsule(px,py, left,crossY, right,crossY, r),   // horizontal crossbar
    sdCapsule(px,py, mid,crossY,  mid,stemBot,  r)    // vertical stem
  );

  if (tSdf < aa) {
    const tA = tSdf < -aa ? 1 : smoothstep(aa,-aa,tSdf);
    const bg = 1-tA;
    // Mist (#E8EAED) over Obsidian (#121418)
    return [
      Math.round(0xE8*tA + 0x12*bg),
      Math.round(0xEA*tA + 0x14*bg),
      Math.round(0xED*tA + 0x18*bg),
      bgA
    ];
  }
  return [0x12,0x14,0x18,bgA];
}

// ── OG IMAGE (1200 × 630) ─────────────────────────────────────────────────────
// Same visual language: dark bg, subtle grid, centred "T" mark in Mist white.
function sdRect(px,py,x1,y1,x2,y2) {
  const cx=(x1+x2)/2,cy=(y1+y2)/2,hw=(x2-x1)/2,hh=(y2-y1)/2;
  const dx=Math.abs(px-cx)-hw, dy=Math.abs(py-cy)-hh;
  return Math.hypot(Math.max(dx,0),Math.max(dy,0))+Math.min(Math.max(dx,dy),0);
}
function getOGPixel(x,y,w,h) {
  const px=x+0.5, py=y+0.5;
  let r=0x12, g=0x14, b=0x18;

  // Grid texture
  const gs=w/22;
  const gx=px%gs, gy=py%gs;
  if (Math.min(gx,gs-gx)<0.55 || Math.min(gy,gs-gy)<0.55) {
    r=Math.min(255,r+10); g=Math.min(255,g+10); b=Math.min(255,b+10);
  }

  // Subtle radial glow (very restrained)
  const dist=Math.hypot(px-w/2,py-h/2);
  const glow=Math.max(0,1-dist/(h*0.8))*0.045;
  r=Math.min(255,Math.round(r+(0xE8-r)*glow));
  g=Math.min(255,Math.round(g+(0xEA-g)*glow));
  b=Math.min(255,Math.round(b+(0xED-b)*glow));

  // Thin cyan accent line at top edge
  if (py < 5) {
    const la=Math.max(0,1-py/3)*0.8;
    r=Math.round(r*(1-la)+0x4F*la);
    g=Math.round(g*(1-la)+0xD1*la);
    b=Math.round(b*(1-la)+0xC5*la);
  }

  // Centred "T" mark (same proportions as icon, just larger)
  const tH = h * 0.50;
  const tW = tH;
  const tx = w/2 - tW/2, ty = h/2 - tH/2;
  const ogR = Math.max(2, tH * 0.031); // stroke radius
  const aa  = 1.8;

  const crossY  = ty + tH*0.290;
  const stemBot = ty + tH*0.790;
  const left    = tx + tW*0.130;
  const right   = tx + tW*0.870;
  const mid     = tx + tW*0.500;

  const tSdf = Math.min(
    sdCapsule(px,py, left,crossY, right,crossY, ogR),
    sdCapsule(px,py, mid,crossY,  mid,stemBot,  ogR)
  );

  if (tSdf < aa) {
    const tA = tSdf<-aa ? 1 : smoothstep(aa,-aa,tSdf);
    r=Math.round(r*(1-tA)+0xE8*tA);
    g=Math.round(g*(1-tA)+0xEA*tA);
    b=Math.round(b*(1-tA)+0xED*tA);
  }

  return [r,g,b,255];
}

// ── ICO FORMAT ────────────────────────────────────────────────────────────────
function createICO(images) {
  const n=images.length;
  let offset=6+n*16;
  const hdr=Buffer.alloc(6);
  hdr.writeUInt16LE(0,0); hdr.writeUInt16LE(1,2); hdr.writeUInt16LE(n,4);
  const dirs=images.map(({png,size})=>{
    const e=Buffer.alloc(16);
    e[0]=size>=256?0:size; e[1]=size>=256?0:size;
    e[2]=0; e[3]=0; e.writeUInt16LE(1,4); e.writeUInt16LE(32,6);
    e.writeUInt32LE(png.length,8); e.writeUInt32LE(offset,12);
    offset+=png.length; return e;
  });
  return Buffer.concat([hdr,...dirs,...images.map(i=>i.png)]);
}

// ── GENERATE ──────────────────────────────────────────────────────────────────
const iconSizes = [
  {name:'favicon-16x16.png',          size:16 },
  {name:'favicon-32x32.png',          size:32 },
  {name:'apple-touch-icon.png',       size:180},
  {name:'android-chrome-192x192.png', size:192},
  {name:'android-chrome-512x512.png', size:512},
];

const cache={};
for (const {name,size} of iconSizes) {
  process.stdout.write(`Generating ${name}...`);
  const png=createPNG(size,size,getTPixel);
  fs.writeFileSync(path.join(OUT,name),png);
  cache[size]=png;
  console.log(' done');
}

process.stdout.write('Generating favicon.ico...');
const ico=createICO([
  {png:cache[16]||createPNG(16,16,getTPixel), size:16},
  {png:cache[32]||createPNG(32,32,getTPixel), size:32},
]);
fs.writeFileSync(path.join(OUT,'favicon.ico'),ico);
console.log(' done');

process.stdout.write('Generating og-image.png (1200×630)...');
const ogPng=createPNG(1200,630,getOGPixel);
fs.writeFileSync(path.join(OUT,'og-image.png'),ogPng);
console.log(' done');

console.log('\n✓ All assets generated in:', OUT);
