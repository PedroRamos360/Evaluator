import React from 'react';

import styles from '../styles/components/Message.module.css';

export default function Message(props) {
	return (
		<main className={styles.messageBackground} {...props}>
			<div className={styles.messageSender}>
				<p className={styles.messageText1}>Remetente:</p>
				<p className={styles.messageText2}>Anônimo</p>
			</div>
			<div className={styles.messageTopic}>
				<p className={styles.messageText1}>Assunto:</p>
				<p className={styles.messageText2}>Volume de atividades</p>
			</div>
		</main>
	);
}