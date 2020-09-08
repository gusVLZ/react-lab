import React, { useState } from "react";
import { Badge } from "../Components/minStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const VoteComponent = (props) => {
	return (
		<div style={{float:"right"}}>
			<VoteButton>
				<FontAwesomeIcon icon="thumbs-up" />
			</VoteButton>
			<VoteButton>
				<FontAwesomeIcon icon="thumbs-down" />
			</VoteButton>
			<VoteButton>
				<FontAwesomeIcon icon="star" />
			</VoteButton>
		</div>
	);
};

const VoteButton = (props) => {
	const [counter, setCounter] = useState({
		count: props.upvotes || 0,
		clicked: props.upvoted || false,
	});
	const onClick = () =>
		setCounter({
			count: counter.clicked ? counter.count - 1 : counter.count + 1,
			clicked: !counter.clicked,
		});

	return (
		<button
			className={counter.clicked ? "alternative" : "secondary"}
			onClick={onClick}
		>
			{props.children}&nbsp;&nbsp;
			<Badge className="alternative">{counter.count}</Badge>
		</button>
	);
};
