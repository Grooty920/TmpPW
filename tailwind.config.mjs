/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#fdf8f0", 100: "#faf1e0", 200: "#f5e6c8", 300: "#edd9ad",
          400: "#e0c48a", 500: "#d4ad6a", 600: "#c49a54", 700: "#a88245",
          800: "#8c6b3a", 900: "#735830", 950: "#3d2e1a",
        },
        ink: {
          50: "#f5f5f0", 100: "#e0ddd5", 200: "#c2bdb0", 300: "#a39c8c",
          400: "#8a8270", 500: "#736b5a", 600: "#5d5648", 700: "#4a4438",
          800: "#37322a", 900: "#26231d", 950: "#1a1814",
        },
        gold: {
          50: "#fdf8ed", 100: "#f9edcc", 200: "#f2d994", 300: "#ebc45c",
          400: "#e5b032", 500: "#d49a1a", 600: "#b87d14", 700: "#936011",
          800: "#7a4e13", 900: "#664116", 950: "#3b2209",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Noto Serif SC"', "serif"],
        sans: ['"Noto Serif SC"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
      },
    },
  },
  plugins: [],
};
