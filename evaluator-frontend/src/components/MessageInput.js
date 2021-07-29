import React from 'react';

import styles from '../styles/components/MessageInput.module.css';

export default function MessageInput({ inputText, inputHeight }) {
	return (
		<div>
			<p className={styles.inputText}>{inputText}</p>
			{ inputHeight === 'small' ? (
				<input type='text' className={styles.input1} />
			) : (
				<textarea className={styles.input2} />
			)}
		</div>
	)
}