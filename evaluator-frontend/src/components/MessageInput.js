import React from 'react';

import styles from '../styles/components/MessageInput.module.css';

export default function MessageInput(props) {
	return (
		<div>
			<p className={styles.inputText}>{props.inputText}</p>
			{ props.inputHeight === 'small' ? (
				<input className={styles.input1} {...props}/>
			) : (
				<textarea spellcheck='false' className={styles.input2} {...props}/>
			)}
		</div>
	)
}