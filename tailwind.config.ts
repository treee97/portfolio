import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // https://www.realtimecolors.com/?colors=1d1a0c-fbf9f4-ebbc00-e6dfc1-9d8c3f&fonts=Dogica%20Pixel-Dogica%20Pixel
      colors: {
        mytext: "var(--my-text)",
        mybackground: "var(--my-background)",
        myprimary: "var(--my-primary)",
        mysecondary: "var(--my-secondary)",
        myaccent: "var(--my-accent)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
