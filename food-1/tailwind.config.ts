import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'boskery-text': '#7A7373',
        'boskery-base': '#A42125',
        'boskery-gray': '#EBE3D9',
        'boskery-gray2': '#D7D3CB',
        'boskery-gray3': '#E2D8CB',
        'boskery-white': '#ffffff',
        'boskery-white2': '#F6F2EC',
        'boskery-black': '#1E1D1D',
        'boskery-black2': '#100F0F',
        'boskery-black3': '#000000',
        'boskery-dark': '#351C42',
        'boskery-orange': '#E76100',
        'boskery-fuchsia': '#FF1C74',
        'boskery-blue': '#6C1CD1',
        'boskery-green': '#59C36A',
        'boskery-yellow': '#FCB720',
        'boskery-border-color': '#EBE3D9',
        black : "#1E1D1D",
      },
      fontFamily: {
        'boskery': ['Plus Jakarta Sans', 'sans-serif'],
        'boskery2': ['Quicksand', 'sans-serif'],
        'boskery-heading': ['Roboto Condensed', 'sans-serif'],
        'icomoon': ['icomoon', 'sans-serif'],
      },
      spacing: {
        'section-space': '120px',
        '192': '192px',
        '92': '92px', // Tạo lớp padding-left cho 92px
        '120': '120px',
        '110': '110px',
        '100': '100px',
        '200': '200px',
        '80': '80px',
        '60': '60px',
        '50': '50px',
        '40': '40px',
        '30': '30px',
        '20': '20px',
        '15': '15px',
        '10': '10px',
        '-60': '-60px',
        '-120': '-120px',
      },
      letterSpacing: {
        'boskery': '-1px',
        boskeryWide: '-1px',
        boskeryExtraWide: '-1.1px',
      },
      maxWidth: {
        '1562': '1562px',
      },
      screens: {
        'xl': '1400px', // Thêm breakpoint 1400px
        'xxl': '1200px',
        "dt": '580px',
      },
    },
  },
  plugins: [],
};
export default config;
