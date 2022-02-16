import React, {useState} from 'react';

import styles from '../styles/pages/SendMessage.module.css';
import MessageInput from '../components/MessageInput';
import { RiSendPlane2Fill } from 'react-icons/ri';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

export default function SendMessage() {
	const history = useHistory();
	const [sender, setSender] = useState('');
	const [receiver, setReceiver] = useState('');
	const [subject, setSubject] = useState('');
	const [content, setContent] = useState('');

	async function handleMessageSubmit() {
		let realSender = sender;
		if (realSender === '') {
			realSender = 'Anônimo';
		}
		if (content.length > 500 || subject.length > 100 || sender.length > 50 || receiver.length > 50) {
			alert('Comprimento dos preenchimentos excedido, verifique os limites e tente novamente!')
		} else if (subject !== '' && content !== '' && receiver !== '') {
			await api.post('send-message', {
				'sender': realSender,
				receiver,
				subject,
				content
			});
			alert('Mensagem enviada com sucesso!');
			history.push('/');
		} else {
			alert('Os campos Destinatário, Tópico e Conteúdo são obrigatórios!')
		}
	}
	return (
		<main className={styles.container}>
			<MessageInput
				inputText='Remetente (máximo 50 caracteres)'
				inputHeight='small'
				value={sender}
				onChange={e => {setSender(e.target.value)}}
			/>
			<MessageInput
				inputText='Destinatário* (máximo 50 caracteres)'
				inputHeight='small'
				value={receiver}
				onChange={e => {setReceiver(e.target.value)}}
			/>
			<MessageInput
				inputText='Tópico* (máximo 100 caracteres)'
				inputHeight='small'
				value={subject}
				onChange={e => {setSubject(e.target.value)}}
			/>
			<MessageInput
				inputText='Conteúdo* (máximo 500 caracteres)'
				value={content}
				onChange={e => {setContent(e.target.value)}}
			/>
			<button onClick={handleMessageSubmit} className={styles.button}>
				Enviar
				<RiSendPlane2Fill height='10' width='10' />
			</button>
		</main>
	)
}