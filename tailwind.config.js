/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        moveUp: 'moveUp 1s ease-in-out', // Animation with 1-second duration
      },
      boxShadow: {
        custom: '0px 10px 50px rgba(0, 0, 0, 0.1)', // Custom shadow
      },
      colors: {
        'custom-from': 'rgb(255, 237, 249)', // Custom color for gradient start
        'custom-to': 'rgb(209, 238, 254)', // Custom color for gradient end
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
