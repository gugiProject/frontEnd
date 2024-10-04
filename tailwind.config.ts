import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const px0_10 = {
  ...Array.from(Array(11), (_, i) => `${i}px`),
};
const px0_100 = {
  ...Array.from(Array(101), (_, i) => `${i}px`),
};
const px0_200 = {
  ...Array.from(Array(201), (_, i) => `${i}px`),
};
const px0_600 = {
  ...Array.from(Array(601), (_, i) => `${i}px`),
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: px0_10,
      borderRadius: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_600,
      minHeight: px0_600,
      spacing: px0_600,
      colors: {
        lightGray: '#E7E7E7',
        gray: '#D9D9D9',
        semiBlack: '#303030',
      },
    },
  },

  safelist: [
    {
      pattern: /-?translate-x-[-]?[0-9]+(\.[0-9]+)?/,
    },
  ],
};
export default config;
