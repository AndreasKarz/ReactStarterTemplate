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
		screens: {
			xs: { max: '640px' },
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			xso: { max: '640px' },

			smo: { min: '640px', max: '767px' },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			mdo: { min: '768px', max: '1023px' },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lgo: { min: '1024px', max: '1279px' },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			xlo: { min: '1280px', max: '1535px' },
			// => @media (min-width: 1280px and max-width: 1535px) { ... }

			'2xlo': { min: '1536px' },
			// => @media (min-width: 1536px) { ... }
		},
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
