/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'cm-color': '#ab2136',
        'cm-bg': '#cfa8a84d',
        'cm-border': '#0000002d',
        'cm-text-color': 'color(display-p3 0.25 0.24 0.24)'
      },
      containers: {
        'cm-container': '600px',
      },
      fontSize: {
        'cm-title': '2.8rem',
        'cm-subtitle': '2.0rem',
      },
      screens: {
        'cm-xs': '576px',
        'cm-md': '992px'
      },
      width: {
        'cm-w': '@include width($cook-master-breakpoints)',
      },
      gridTemplateColumns: {
        'cm-blog': '70% 30%;',
      },
      textShadow: {
        'cm': '0 5px 10px color(display-p3 0.71 0.71 0.71)'
      },
      boxShadow: {
        'cm': '0 0 20px color(display-p3 .7 .7 .7)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    })
  ],
}

