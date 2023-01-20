/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

/**
 * A guide to configuring and customizing your Tailwind installation
 * https://tailwindcss.com/docs/configuration
 */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
		},
		colors: {
			gray: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
