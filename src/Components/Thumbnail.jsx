import React from "react";
import styled from "styled-components";
import Avatar from "../Assets/Imgs/AvatarPic.png";

export default function Thumbnail(props) {
	return (
		<Wrapper className="bgText">
			<ImageWrapper>
				<Image src={props.imageUrl || Avatar} />
			</ImageWrapper>
			<ThumbText>{props.children || "Título"}</ThumbText>
		</Wrapper>
	);
}

const ThumbText = styled.h2`
	font-size: 15pt;
	transition: all 0.5s linear;
	padding: 0.5rem 1rem 0.5rem 1rem;
`;
const Wrapper = styled.div`
	padding: 0;
	margin: 1rem;
	box-shadow: 0px 2px 4px #000;
	transition: all 0.2s linear;
	border-radius: 5px;
	display: block;
	transform: scale(1);
	width: 15rem;
	height: 20rem;
	&:hover {
		box-shadow: 0px 3px 6px #000;
		transform: scale(1.03);
		${ThumbText} {
			text-decoration: underline;
		}
	}
`;
const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 75%;
	box-shadow: inset 0 -30px 20px -20px #000;
	border-radius: inherit;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`;
const Image = styled.img`
	margin: 0;
	padding: 0;
	border-radius: inherit;
	background-size: 100%;
	overflow: hidden;
	width: 100%;
	height: 100%;
	display: block;
	position: relative;
	z-index: -1;
`;
