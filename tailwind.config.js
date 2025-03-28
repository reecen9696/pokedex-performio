/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ui: {
          background: "#A0BAC6",
          card: {
            base: "#C5D4DD",
            selected: "#567E94",
            hover: "#EFF4F5",
          },
          number: {
            base: "#DBE5EB",
            hover: "#F6F7F9",
            selected: "#A8B6BE",
          },
          pokemonCounter: {
            background: "#567E94",
            outline: "#FFFFFF",
          },
          image: {
            base: "#DBE5EB",
            selected: "#A0BAC6",
          },
        },
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
        shake: "shake 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
