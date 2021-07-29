import React from 'react';

import styles from '../styles/pages/SendMessage.module.css';
import MessageInput from '../components/MessageInput';

export default function SendMessage() {
	return (
		<main className={styles.container}>
			<MessageInput inputText='Remetente (opcional)' inputHeight='small' />
			<MessageInput inputText='Tópico' inputHeight='small' />
			<MessageInput inputText='Conteúdo' />
			<button>Enviar</button>
		</main>
	)
}