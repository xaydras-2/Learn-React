/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-color-scheme="dark"]'], // Use class and data attribute for dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(10px)",
          },
        },
        swing: {
          "20%": {
            transform: "rotate3d(0, 0, 1, 15deg)",
          },
          "40%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "60%": {
            transform: "rotate3d(0, 0, 1, 5deg)",
          },
          "80%": {
            transform: "rotate3d(0, 0, 1, -5deg)",
          },
          to: {
            transform: "rotate3d(0, 0, 1, 0deg)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        swing: "swing 1s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};
