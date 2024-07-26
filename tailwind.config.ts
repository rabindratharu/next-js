import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xm: "320px",
      },
      height: {
        "almost-screen": "calc(-16rem + 100vh)",
        "225px": "14.063rem",
        "338px": "21.125rem",
      },
      width: {
        "400px": "25rem",
        "600px": "37.5rem",
      },
      minHeight: {
        "almost-screen": "calc(-16rem + 100vh)",
        "42px": "2.625rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
