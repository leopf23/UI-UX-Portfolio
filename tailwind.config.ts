import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Importa el plugin correctamente

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bmw: ["BMWMotorrad", "sans-serif"],
        dreams: ["DREAMS", "sans-serif"],
      },
      textStroke: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
      boxShadow: {
        "custom-blue": "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
        "custom-red": "0 4px 6px -1px rgba(220, 38, 38, 0.5)",
      },
      colors: {
        black: "#000",
        blue: "#1D00ED",
        blueDark: "#1B1B22",
        blueLight: "#1E86EB",
        blueText: "#3D9AF4",
        white: "#fff",
      },
      scrollSnapStop: {
        always: "always",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-image": "url('https://example.com/your-image.jpg')",
      },
    },
  },
  plugins: [
    plugin(function (pluginApi: any) {
      // Forzamos el tipo "any" para evitar el error
      const { addUtilities } = pluginApi;

      const newUtilities = {
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke-width": "2px",
        },
        ".text-stroke-3": {
          "-webkit-text-stroke-width": "3px",
        },
        ".text-stroke-blue": {
          "-webkit-text-stroke-color": "#1D00ED",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#fff",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};

export default config;
