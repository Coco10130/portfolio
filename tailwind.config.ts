import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-serif': ['var(--font-sourceSerif)'],
        'source-serif-bold': ['var(--font-sourceSerifBold)'],
        'source-serif-semibold': ['var(--font-sourceSerifSemiBold)'],
        'source-serif-italic': ['var(--font-sourceSerifItalic)'],
      },

      colors: {
        "dirty-white": "F4F2F2"
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;