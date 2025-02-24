/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        syne: ["var(--font-syne)"],
      },
      backgroundImage: {
        "gradient-radial-light":
          "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-radial-dark":
          "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        a: {
          fluo: "#B3CF3D",
          green: "#D0F603",
          pnlGreen: "#40b66b",
          pnlRed: "#ff5f52",
          charcoal: "#0c0c0c",
          gray: "#7d7d7d",
          social: "#4B4D51", // Social links
          positive: "#007902", // Positive numbers
          connected: "#65FB9E", // Connected status green
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
          bgMain: "#0C1010", // Page background
          tokenAmount: "#161A1B", // Token banner text
          stroke: "#2F2F2F", // Div strokes
          divBg: "#161A1B", // Div backgrounds
          tableHeader: "#242626", // Table header background,
          connectedbg: "rgba(181, 254, 185, 0.1)", // 10% opacity
          connectedtext: "#B5FEB9", // 100% opacity
        },
        textShadow: {
          "a-fluo": "0 0 8px rgba(179, 207, 61, 1)",
          none: "none",
        },
        backgroundImage: {
          ramp: "url(../public/assets/images/rampx-bg.png)",
          code: "url(../public/assets/images/codebgstatic.png)",
        },
        // SHADCN Classes
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        custom: "16px", // Custom rounded corners
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%, 100%": {
            "background-color": "transparent",
            color: "#B3CF3D",
          },
          "50%": {
            "background-color": "#B3CF3D",
            color: "black",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 2s infinite",
        scroll: "scroll 200s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
