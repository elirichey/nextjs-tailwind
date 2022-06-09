module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#09B4FF",
      green: "#00DD00",
      red: "#FF0000",
      pink: "#FF6BBD",
      yellow: "#FFE800",
      // Mono
      white: "#FFFFFF",
      black: "#000000",
      // Grayscale Shades
      lighter: "#F3F3F3",
      light: "#CCCCCC",
      dark: "#4f4f4f",
      gray: "#878787",
      // Shades
      "off-white": "#F0F0F0",
      "lt-blue": "#F3FAFF",
      "off-blue": "#4A8DFF",
      "dk-green": "#00AA00",
      "dk-red": "#CC0000",
      // Opacity
      "lt-blue-75": "rgba(220, 240, 255, 0.75)",
    },
    fontFamily: {
      sans: ["Fieldwork"],
      serif: ["Fieldwork"],
    },
    extend: {},
  },
  plugins: [],
};
