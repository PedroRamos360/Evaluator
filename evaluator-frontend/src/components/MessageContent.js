import React from 'react';

import styles from '../styles/components/MessageContent.module.css';
import { FiX } from "react-icons/fi";

export default function MessageContent({ isHidden, setIsHidden }) {
	return (
		<main className={isHidden ? styles.backgroundHidden : styles.background}>
			<header className={styles.header}>
				<div>
					<h1>Volume de atividades</h1>
					<h2 className={styles.sender}>Anônimo</h2>
				</div>
				<button className={styles.closeButton}>
					<FiX onClick={() => {setIsHidden(true)}}/>
				</button>
			</header>
			<p className={styles.messageText}>
				Bom dia professor, estou escrevendo esta mensagem para reclamar sobre o
				volume de atividades que estão sendo passadas ultimamente. Além disso me
				parece que muitas delas não foram muito bem planejadas e não contribuem
				para o nosso aprendizado na matéria em questão.
			</p>
			<footer className={styles.footer}>
				<button className={styles.markAsReadButton}>Marcar como lida</button>
			</footer>
		</main>
	)
}