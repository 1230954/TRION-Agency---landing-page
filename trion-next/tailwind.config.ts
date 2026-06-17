import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#121418',
        graphite: '#232831',
        mist: '#E8EAED',
        steel: '#8A93A2',
        'trion-cyan': '#4FD1C5',
      },
      fontFamily: {
        head: ['var(--ff-head)', 'sans-serif'],
        body: ['var(--ff-body)', 'sans-serif'],
      },
      screens: {
        desktop: '1024px',
      },
    },
  },
  plugins: [],
}

export default config
