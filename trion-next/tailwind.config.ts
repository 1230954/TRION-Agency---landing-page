import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: '#060606',
        graphite: '#141414',
        mist: '#F5F5F3',
        steel: '#B8B8B8',
        'trion-cyan': '#2ED3A8',
      },
      fontFamily: {
        head: ['var(--ff-head)', 'sans-serif'],
        body: ['var(--ff-body)', 'sans-serif'],
      },
      screens: {
        desktop: '1024px',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  plugins: [],
}

export default config
