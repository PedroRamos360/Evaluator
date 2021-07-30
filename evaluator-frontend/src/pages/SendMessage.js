import React from 'react';

import styles from '../styles/pages/SendMessage.module.css';
import MessageInput from '../components/MessageInput';
import { RiSendPlane2Fill } from 'react-icons/ri';

export default function SendMessage() {
	return (
		<main className={styles.container}>
			<MessageInput inputText='Remetente (opcional)' inputHeight='small' />
			<MessageInput inputText='Tópico' inputHeight='small' />
			<MessageInput inputText='Conteúdo' />
			<button className={styles.button}>
				Enviar
				<RiSendPlane2Fill height='10' width='10' />
			</button>
		</main>
	)
}