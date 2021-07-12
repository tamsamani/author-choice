/* eslint-disable @typescript-eslint/no-var-requires */
const appThemeColors = require("./styles/app-theme.json");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	// mode: "jit",
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...appThemeColors,
			},
			backgroundImage: () => {
				return {
					"pattern-square": `url('/img/pattern-bright-squares.png')`,
				};
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
