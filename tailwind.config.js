const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	// mode: "jit",
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: colors.violet,
				success: colors.green,
				warning: colors.yellow,
				danger: colors.red,
				info: colors.cyan,
			},
			backgroundImage: () => {
				return {
					"pattern-square": `url('/img/pattern-bright-squares.png')`,
				};
			},
		},
	},
	plugins: [],
};
