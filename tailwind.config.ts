import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: '#F7F9F9',
      black: {
        light: "#374f6d",
        DEFAULT: "#2E4057"
      },
      primary: {
        light: "#fdc3ab",
        DEFAULT: "#FB8F67",
        dark: "#f9653e"
      },
      secondary: "#F7CB15"
    },
  },
  plugins: [],
}
export default config
