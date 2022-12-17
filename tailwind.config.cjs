const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			slate: colors.slate,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			nicered: '#F36C60',
			nicepurple: '#BA68C8',
			niceblue: '#738FFE',
			nicelightblue: '#80DEEA',
			nicegreen: '#72D572',
			nicelightgreen: 'D4E157',
			niceyellow: '#FFF176',
			niceorange: '#FFB74D'
		},
		extend: {}
	},
	plugins: []
};
