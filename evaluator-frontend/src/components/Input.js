import React from 'react';

import '../styles/global.css';

export default function Input(props) {
	return (
		<main>
			<p className='home-input-text'>{props.text}</p>
			<input />
		</main>
	);
}