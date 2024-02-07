import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        // mytheme: {
        //   "primary": "#4338ca",
        //   "secondary": "#3a3f47",
        //   "accent": "#15803d",
        //   "neutral": "#047857",
        //   "base-100": "#f8fafc",
        //   "info": "#0ea5e9",
        //   "success": "#10b981",
        //   "warning": "#facc15",
        //   "error": "#f43f5e",
        // },
        mytheme: {
          "primary": "#4fcca3",
          "secondary": "#3a3f47",
          "accent": "#00ecff",
          "neutral": "#4fcca3",
          "base-100": "#f8fafc",
          "info": "#22d3ee",
          "success": "#22c553",
          "warning": "#ffd523",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [
    daisyui
  ],
}