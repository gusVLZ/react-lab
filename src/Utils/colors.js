exports.getTheme = (mode) => {
	const colorsLight = {
		primary: "#045387",
		secondary: "#0E89D8",
		text: "#222222",
		bgText: "#eeeeee",
		alternative: "#02DE7A"
	}

	const colorsDark = {
		primary: "#0A293D",
		secondary: "#021826",
		text: "#eeeeee",
		bgText: "#333333",
		alternative: "#00a8a8"
	}
	
	switch (mode) {
		case "dark":
			console.log("setting dark")
			return colorsDark
		case "light":
			console.log("setting light")
			return colorsLight
		default:
			this.getTheme(window.localStorage.getItem("theme"))
			return colorsLight
	}
}
