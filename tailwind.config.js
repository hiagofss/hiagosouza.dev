const color = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			black: color.black,
			white: color.gray[100],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
