import React from 'react';

import styles from '../styles/components/MessageContent.module.css';
import { FiX } from "react-icons/fi";
import api from '../services/api';

export default function MessageContent(props) {
	async function handleMarkAsRead() {
		console.log(props.Id);
		await api.delete(`delete-message/${props.Id}`);
		props.setIsHidden(true);
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}

	return (
		<main className={props.isHidden ? styles.backgroundHidden : styles.background}>
			<header className={styles.header}>
				<div>
					<h1>{props.subject}</h1>
					<h2 className={styles.sender}>{props.sender}</h2>
				</div>
				<button className={styles.closeButton}>
					<FiX onClick={() => {props.setIsHidden(true)}}/>
				</button>
			</header>
			<p className={styles.messageText}>{props.content}</p>
			<footer className={styles.footer}>
				<button onClick={handleMarkAsRead} className={styles.markAsReadButton}>Excluir Mensagem</button>
			</footer>
		</main>
	)
}