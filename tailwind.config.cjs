/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

/**
 * A guide to configuring and customizing your Tailwind installation
 * https://tailwindcss.com/docs/configuration
 */

module.exports = {
	content: [
		'./src/**/*.{html,js,jsx,ts,tsx}',
		'./src/*.{html,js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx}',
	],
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
			/* Define your color schema here */
			gray: colors.gray,
			blue: colors.sky,
			red: colors.rose,
			h1_light: colors.fuchsia,
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
