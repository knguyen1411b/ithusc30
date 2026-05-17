import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|card|input|navbar|popover|ripple|spinner).js',
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': {
          '50': '#eef8ff',
          '100': '#dcf2ff',
          '200': '#b2e6ff',
          '300': '#6dd3ff',
          '400': '#20bdff',
          '500': '#00a4ff',
          '600': '#0083df',
          '700': '#0067b4',
          '800': '#005895',
          '900': '#00487a',
          '950': '#003056',
        },
        turbo: {
          '50': '#fdffe7',
          '100': '#faffc1',
          '200': '#f9ff86',
          '300': '#feff41',
          '400': '#fff50d',
          '500': '#ffe700',
          '600': '#d1ab00',
          '700': '#a67b02',
          '800': '#89600a',
          '900': '#744e0f',
          '950': '#442a04',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s',
      },
    },
  },
  plugins: [nextui()],
}
export default config
