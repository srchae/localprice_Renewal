import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        'custom-gray': '#7B7878',
        '#C9C9C9': '#C9C9C9',
        '#A29B9B': '#A29B9B',
        '#06060600': '#06060600',
        '#BAB4B4': '#BAB4B4',
        '#D9D9D9': '#D9D9D9',
        '#C4C4C4': '#C4C4C4',
        '#FF0505': '#FF0505',
        '#333333': '#333333',
        '#646368': '#646368',
        '#F8F8F8': '#F8F8F8',
        '#C8C8C8': '#C8C8C8',
        '#E5E5E5': '#E5E5E5',
        // red
        '#EE244A': '#EE244A',
        '#88142A': '#88142A',
        // purple
        '#5A28EC': '#5A28EC',
        '#331786': '#331786',
        // gray
        '#636366': '#636366',
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
