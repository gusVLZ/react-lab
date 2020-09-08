import React, { Fragment, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalTheme from "./globals";
import { getTheme } from "./Utils/colors";
import Post from "./Components/Post";
import NavBar from "./Components/Navs/TopBar";
import FontAwesomeInit from "./FontAwesomeInit";
import Thumbnail from "./Components/Thumbnail";

function App() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		console.log("consumed");
		if (theme === "light") {
			window.localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			setTheme("light");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
	}, []);

	return (
		<ThemeProvider theme={getTheme(theme)}>
			<Fragment>
				<GlobalTheme />
				<FontAwesomeInit />
				<NavBar themeHandler={toggleTheme} />
				<ContainerCentered>
					<Title>Gustavo Velozo</Title>
				</ContainerCentered>
				<ContainerCentered>
					<Thumbnail>Thumbnail</Thumbnail>
					<Thumbnail imageUrl="https://animals.sandiegozoo.org/sites/default/files/styles/view_thumbnail/public/2016-10/animals_hero_hummingbird_1.jpg?h=d1cb525d&itok=IKunEAxu">
						Beija-flor Chic
					</Thumbnail>
					<Thumbnail imageUrl="https://www.shareicon.net/data/2016/08/01/640324_logo_512x512.png">
						Ícone React
					</Thumbnail>
				</ContainerCentered>
				<ContainerCentered>
					<Post titulo="Teste!">React é Muito bom !</Post>
					<Post titulo="Teste!">React é Muito bom !</Post>
					<Post titulo="Teste!">React é Muito bom !</Post>
					<Post titulo="Teste!">React é Muito bom !</Post>
				</ContainerCentered>
			</Fragment>
		</ThemeProvider>
	);
}
const ContainerCentered = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100vw;
	max-width: 100%;
`;

const Title = styled.h1`
	font-size: 30px;
	margin-left: 15px;
`;

export default App;
