import React from 'react'
import styled from "styled-components"
import {loremIpsum} from "../globals"
import { VoteComponent } from './VoteComponent'

export default function Post(props) {
	return (
		<Wrapper className="bgText">
			<Title>{props.titulo}</Title>
			{props.children||loremIpsum}
			<br/>
			<br/>
			<VoteComponent/>
		</Wrapper>
	)
}
 
const Wrapper = styled.div`
	padding: 1rem 2rem 1rem 2rem;
	margin: 1rem;
	max-width: 800px;
	width:90vw;
	border-radius: 3px;
`
const Title = styled.h1`
	font-size: 20pt;
	font-weight: bold;
	
`
