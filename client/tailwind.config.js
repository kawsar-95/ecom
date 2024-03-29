module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  purge: [".node_modules/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "80vh": "50vh",
      },

      screens: {
        xsr: { min: "0px", max: "639px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        smr: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        mdr: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lgr: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xlr: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xlr": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
