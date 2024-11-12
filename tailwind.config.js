// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#0d0c22', // Dark background color
//         secondary: '#ff6d00', // Accent color
//         textPrimary: '#ffffff', // Primary text color
//         textSecondary: '#a1a1a1', // Secondary text color
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        darkBlue: '#0a192f',
        lightBlue: '#112240',
        teal: '#64ffda',
        lightestSlate: '#ccd6f6',
        slate: '#8892b0',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // egyéb pluginok
  ],
};
