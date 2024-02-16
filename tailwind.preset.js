/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        footnote: {
          "text-color": "var(--footnote-text-color)",
        },
        label: {
          "text-color": "var(--label-text-color)",
        },
        placeholder: {
          "text-color": "var(--placeholder-text-color)",
        },
        select: {
          "background-color": "var(--select-input-background-color)",
          "border-color": "var(--select-input-border-color)",
          "text-color": "var(--select-input-text-color)",
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
};
