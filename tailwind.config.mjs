/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f3e8", 100: "#e8e0cc", 200: "#c9c0a8", 300: "#a99f85",
          400: "#8a7f62", 500: "#6b5f45", 600: "#4c4030", 700: "#3a3024",
          800: "#2a221a", 900: "#1c1c1c", 950: "#0f0f0f",
        },
        paper: {
          50: "#fefcf5", 100: "#fdf9eb", 200: "#faf3d7", 300: "#f7f3e8",
          400: "#f0e8cc", 500: "#e8dbb0", 600: "#d4c494", 700: "#b8a878",
          800: "#9c8c5c", 900: "#807040",
        },
        cinnabar: {
          50: "#fdf2f2", 100: "#f9d6d6", 200: "#f2adad", 300: "#e87d7d",
          400: "#d95454", 500: "#c73e3a", 600: "#a8302c", 700: "#8a2824",
          800: "#6e221f", 900: "#5a1e1b",
        },
        stone: {
          50: "#f2f7f0", 100: "#dce8d7", 200: "#b9d0b0", 300: "#8fb882",
          400: "#6a9e5a", 500: "#4a6741", 600: "#3d5536", 700: "#31452b",
          800: "#263522", 900: "#1c2619",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"LXGW WenKai"', "serif"],
        script: ['"LXGW WenKai"', '"Noto Serif SC"', "cursive"],
      },
      animation: {
        "ink-drop": "inkDrop 2s ease-out forwards",
        "brush-stroke": "brushStroke 2s ease-out forwards",
        "cloud-drift": "cloudDrift 20s ease-in-out infinite",
        "scroll-unfold": "scrollUnfold 1.5s ease-out forwards",
        "seal-appear": "sealAppear 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        inkDrop: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "60%": { opacity: "0.6" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        brushStroke: {
          "0%": { "stroke-dashoffset": "1000" },
          "100%": { "stroke-dashoffset": "0" },
        },
        cloudDrift: {
          "0%": { transform: "translateX(-10%) translateY(0)" },
          "25%": { transform: "translateX(0%) translateY(-5px)" },
          "50%": { transform: "translateX(10%) translateY(0)" },
          "75%": { transform: "translateX(5%) translateY(5px)" },
          "100%": { transform: "translateX(-10%) translateY(0)" },
        },
        scrollUnfold: {
          "0%": { "clip-path": "inset(0 100% 0 0)" },
          "100%": { "clip-path": "inset(0 0% 0 0)" },
        },
        sealAppear: {
          "0%": { opacity: "0", transform: "scale(0) rotate(-30deg)" },
          "50%": { transform: "scale(1.2) rotate(5deg)" },
          "100%": { opacity: "0.9", transform: "scale(1) rotate(0deg)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
