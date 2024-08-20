/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
      },
    },
    extend: {
      colors: {
        color: {
          1: "#fbb911",
          2: "#3fc3d7",
        },
        stroke: {
          1: "#202121",
        },
        n: {
          1: "#FFFFFF",
          2: "#F6F6F6",
          3: "#E6E6E6",
          4: "#c7c7c7",
          5: "#D1D1D1",
          6: "#CCCCCC",
          7: "#9B9B9B",
          8: "#545555",
          9: "#474949",
          10: "#121313",
          11: "#000000",
        },
      },
      fontFamily: {
        syne: "var(--font-syne)",
        montserrat: "var(--font-montserrat)",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
        10: ".10",
      },
      width: {
        "12x": "120rem",
      },
      height: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      lineClamp: {
        7: "7",
      },
      margin: {
        "5px": "5rem",
      },
    },
  },
  plugins: [],
};
