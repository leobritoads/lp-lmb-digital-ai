
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // slate-900 override
        foreground: "#f8fafc",
        primary: "#1e293b",
        accent: {
          DEFAULT: "#eab308",
          hover: "#facc15"
        },
        muted: "#94a3b8"
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 2vw, 1rem)",
        "fluid-base": "clamp(1rem, 2.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 3vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 4vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 5vw, 1.875rem)",
        "fluid-3xl": "clamp(1.875rem, 7vw, 3rem)",
        "fluid-4xl": "clamp(2.25rem, 10vw, 3.75rem)",
        "fluid-5xl": "clamp(3rem, 12vw, 4.5rem)",
        "fluid-6xl": "clamp(3.75rem, 15vw, 6rem)",
      }
    },
  },
  plugins: [],
}
