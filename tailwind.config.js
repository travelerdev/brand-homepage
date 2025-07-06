module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        title: [
          "PT Sans",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ]
      }
    }
  },
  variants: {
    extend: {
      opacity: ["dark"],
      fontWeight: ["dark"]
    }
  }
};
