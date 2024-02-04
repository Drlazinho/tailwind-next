import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      colors: {
        lazinho: '#00d3c3'
      }
    },
  },
  plugins: [],
};
export default config;
