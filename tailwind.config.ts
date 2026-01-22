import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sigma: {
          blue: "#003A8F", // royal blue
          white: "#FFFFFF",
          ink: "#0B1220",  // dark text
          slate: "#003A8F" // muted text
        },
      },
    },
  },
  plugins: [],
};

export default config;
