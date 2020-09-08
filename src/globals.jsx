import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        color: ${({ theme }) => theme.text};
    }

    body {
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.text};
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        transition: all 0.25s linear;
    }

	button{
		margin:0.2rem;
		padding:0.5rem;
		border:solid 0.1rem grey;
		border-radius:0.1rem;
    background: ${({ theme }) => theme.alternative};
		box-shadow: 0 2 5 #333333;
	}

	.primary{
			background: ${({ theme }) => theme.primary};
	}
	.secondary{
			background: ${({ theme }) => theme.secondary};
	}
	.alternative{
			background: ${({ theme }) => theme.alternative};
      color: ${({ theme }) => theme.text};
	}

	.bgText{
		background: ${({ theme }) => theme.bgText};
    color: ${({ theme }) => theme.text};
	}

`;

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
					+"Cras vel porttitor odio. Vestibulum sodales dui interdum magna commodo pretium. "
					+"Ut vulputate sit amet neque in faucibus. Fusce vitae egestas nisi. "
					+"Phasellus ac nibh ac velit pretium bibendum sed ut turpis. Curabitur ac semper ligula. "
					+"Donec placerat at justo sed vestibulum. Nulla ut elit lorem. "
					+"Quisque efficitur orci sit amet dolor rutrum, vel porta nisi luctus. Aliquam interdum accumsan dictum.";

export { loremIpsum };
