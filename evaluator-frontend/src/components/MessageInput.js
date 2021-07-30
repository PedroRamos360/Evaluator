import React from 'react';

import styles from '../styles/components/MessageInput.module.css';

export default function MessageInput({ inputText, inputHeight }) {
	return (
		<div>
			<p className={styles.inputText}>{inputText}</p>
			{ inputHeight === 'small' ? (
				<input className={styles.input1} />
			) : (
				<textarea spellcheck='false' className={styles.input2} />
			)}
		</div>
	)
}