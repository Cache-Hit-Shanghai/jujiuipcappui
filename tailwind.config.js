// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./jujiu-ui-components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				wechat: '#1AAD19',
				alipay: '#1678FF',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			addCommonColors: true,
		}),
	],
};
