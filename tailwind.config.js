/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["Roboto", "sans-serif"],
			mplus: ['"M PLUS 1 Code", monospace'],
			monserat: ['"Montserrat", sans-serif'],
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				green: "#009B4D",
				tangerineYellow: "#FFCC00",
				ivory: "#FAF5E9",
			},
			shadows: {
				boxShadow: "19px 19px 37px #e0d8d9, -19px -19px 37px #ffffff",
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
			backgroundImage: {
				"paralax-image": "url('./assets/images/ayr.png')",
				bgImg: "url('./assets/images/imgsd.jpg')",
			},
		},
	},
	plugins: [],
};
