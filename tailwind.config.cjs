/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

/**
 * A guide to configuring and customizing your Tailwind installation
 * https://tailwindcss.com/docs/configuration
 * https://tailwindcss.com/docs/customizing-colors#default-color-palette
 */

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './src/*.{html,js,jsx,ts,tsx}'],
	theme: {
		fontWeight: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
			h1: 700,
		},
		container: {
			center: true,
		},
		colors: {
			...colors, // colors from tailwindcss/colors => for real websites define your own colors and remove this line
			tahiti: {
				// https://tailwindcss.com/docs/customizing-colors#using-custom-colors
				light: '#67e8f9',
				DEFAULT: '#06b6d4',
				dark: '#0e7490',
			},
		},
		extend: {},
	},
	plugins: [],
};
