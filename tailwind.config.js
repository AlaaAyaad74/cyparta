/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: "#333333",
        customBlack: "#242223",
        notifyColor: "#A2A1A81A",
        customBlack2: "#16151C",
        labelColor: "#A2A1A8",
        borderColor: "#A2A1A81A",
      },
      boxShadow: {
        custom: "0px 1px 4px 4px rgba(157, 157, 157, 0.2)", // Custom shadow definition
      },
      width: {
        "calc-full-minus-329": "calc(100% - 329px)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-border-last-2 > :nth-last-child(-n+2)": {
            borderBottomWidth: "0",
          },
        },
        ["responsive"]
      );
    },
  ],
};
