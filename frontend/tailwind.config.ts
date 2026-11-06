import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#080811",
        panel: "#11111f",
        neon: "#a78bfa",
        cyan: "#67e8f9",
      },
    },
  },
  plugins: [],
};

export default config;
