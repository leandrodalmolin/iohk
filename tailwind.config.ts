import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#ead0ff',
          200: '#dfbffa',
        },
        peach: {
          100: '#ffe9d5',
          200: '#f9ddc2',
        },
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(101.69deg, #e5e9fa 25.94%, #f6dede 102.42%)',
      },
      boxShadow: {
        default: '0px 4px 25px 0px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn .8s ease-in',
        'fade-in-to-left': 'fadeInToLeft 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInToLeft: {
          '0%': { opacity: '0', transform: 'translateX(20%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
