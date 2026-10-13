/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      boxShadow: {
        indigo: "0 4px 6px rgba(75, 85, 99, 0.3)", // Custom shadow color for indigo
        blue: "0 4px 6px rgba(59, 130, 246, 0.3)", // Custom shadow color for blue
        green: "0 4px 6px rgba(34, 197, 94, 0.3)", // Custom shadow color for green
        red: "0 4px 6px rgba(220, 38, 38, 0.3)", // Custom shadow color for red
      },
      backgroundImage: {
        // Shared dark-blue banner gradient (was repeated in several .css files)
        "brand-gradient":
          "linear-gradient(to right, #000F1A 0%, #000F1A 50%, #0077D5 100%)",
      },
      keyframes: {
        // Client logo marquee (was an inline <style jsx> block in NewClient.jsx)
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
