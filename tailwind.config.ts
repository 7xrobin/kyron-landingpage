import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        purple: {
          50:  'var(--color-purple-50)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          400: 'var(--color-purple-400)',
          600: 'var(--color-purple-600)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
        },
        gray: {
          50:  'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          400: 'var(--color-gray-400)',
          600: 'var(--color-gray-600)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        teal: {
          50:  'var(--color-teal-50)',
          100: 'var(--color-teal-100)',
          200: 'var(--color-teal-200)',
          600: 'var(--color-teal-600)',
          800: 'var(--color-teal-800)',
        },
        amber: {
          50:  'var(--color-amber-50)',
          100: 'var(--color-amber-100)',
          400: 'var(--color-amber-400)',
          600: 'var(--color-amber-600)',
          800: 'var(--color-amber-800)',
        },
      },
    },
  },
  plugins: [],
}

export default config
