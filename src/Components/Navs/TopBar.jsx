import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../Assets/Imgs/AvatarPic.png";
import styled from "styled-components";

export default function TopBar(props) {
	const defaultItens = [
		{
			link: "home",
			text: "Início",
			icon: "home",
		},
		{
			link: "contact",
			text: "Contato",
			icon: "phone-alt",
		},
		{
			link: "profile",
			text: "Perfil",
			icon: "user-circle",
		},
	];

	const [navItens /*, setNavItens*/] = useState(props.navItens || defaultItens);

	const ulStyle = {
		display: "flex",
		height: "3rem",
		float: "right",
		margin: 0,
		width: "100vw",
		listStyleType: "none",
		justifyContent: "flex-end",
		alignItems: "center",
	};

	const liStyle = {
		display: "flex",
		height: "100%",
		padding: "0rem 1rem 0rem 1rem ",
		alignItems: "center",
	};

	const avatarStyle = {
		position: "absolute",
		display: "block",
		top: 0,
		left: 0,
		maxWidth: "300px",
		width: "10rem",
		maxHeight: "300px",
		height: "10rem",
		background:
			"linear-gradient(135deg, rgba(2,222,122,1) 50%, rgba(255,255,255,0) 50%)",
	};

	return (
		<nav style={{ display: "block" }}>
			<AvatarNav style={avatarStyle}>
				<CircledImage src={avatar} />
			</AvatarNav>

			<ul style={ulStyle}>
				{navItens.map((item) => (
					<li style={liStyle} key={item.link}>
						<a href={item.link} style={{ textDecoration: "none" }}>
							<FontAwesomeIcon icon={item.icon} /> {item.text}
						</a>
					</li>
				))}
				<li style={liStyle}>
					<button onClick={props.themeHandler} className="alternative">
						<FontAwesomeIcon icon="sun" />
						&nbsp;<b>/</b>&nbsp;
						<FontAwesomeIcon icon="moon" />
					</button>
				</li>
			</ul>
		</nav>
	);
}

const AvatarNav = styled.div`
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	max-width: 300px;
	width: 10rem;
	max-height: 300px;
	height: 10rem;
`;

const CircledImage = styled.img`
	background-size: 100% 100%;
	border-radius: 50%;
	width: 70%;
	margin-left: 5%;
	margin-top: 5%;
	box-shadow: 0 3px 5px #000;
`;
