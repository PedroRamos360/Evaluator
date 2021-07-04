import React from 'react';

import '../styles/global.css';
import styles from '../styles/components/Input.module.css';

export default function Input(props) {
	return (
		<main className={styles.homeInputContainer}>
			<p className={styles.homeInputText}>{props.text}</p>
			<input className={styles.homeInput} {...props} />
		</main>
	);
}