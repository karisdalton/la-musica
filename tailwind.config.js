const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				info: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
				menu: ["Varela", ...defaultTheme.fontFamily.sans],
				artist: ['"Source Code Pro"', ...defaultTheme.fontFamily.sans],
				songTitle: ['"Varela"', ...defaultTheme.fontFamily.sans],
				title: ["Prata", ...defaultTheme.fontFamily.sans],
				button: ["Varela", ...defaultTheme.fontFamily.sans],
				player: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
