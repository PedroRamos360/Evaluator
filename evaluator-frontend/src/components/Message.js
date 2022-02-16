import React from 'react';

import styles from '../styles/components/Message.module.css';

export default function Message(props) {
	return (
		<main className={styles.messageBackground} onClick={props.onClick} {...props}>
			<div className={styles.messageSender}>
				<p className={styles.messageText1}>Remetente:</p>
				<p className={styles.messageText2}>{props.sender}</p>
			</div>
			<div className={styles.messageTopic}>
				<p className={styles.messageText1}>Assunto:</p>
				<p className={styles.messageText2}>{props.subject}</p>
			</div>
		</main>
	);
}