import React from 'react';

import styles from '../styles/components/Message.module.css';

export default function Message() {
	return (
		<main className={styles.messageBackground}>
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