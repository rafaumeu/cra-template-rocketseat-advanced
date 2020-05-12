import {createGlobalStyle} from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	*:focus {
		outline: 0;
	}
	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	body, input, button {
		font: 14px 'Roboto', sans-serif;
	}
	html, body, #root {
		height: 100%;
	}

	button {
		cursor: pointer;
	}
`;
