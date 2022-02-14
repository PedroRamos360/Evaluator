import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


import styles from '../styles/pages/TeacherPage.module.css';
import TopLeftLines from '../components/TopLeftLines';
import BottomRightLines from '../components/BottomRightLines';
import Message from '../components/Message';
import MessageContent from '../components/MessageContent';
import api from '../services/api';

export default function TeacherPage() {
	const history = useHistory();
	const [isHidden, setIsHidden] = useState(true);
	const [username, setUsername] = useState('');
	const [messages, setMessages] = useState([]);

	const [messageSender, setMessageSender] = useState('');
	const [messageSubject, setMessageSubject] = useState('');

	function messageClicked(e) {
		setIsHidden(false);
		console.log(e.currentTarget.getAttribute('a'));
		console.log('jorge');
		// setMessageSender(e.sender);
		// setMessageSubject(e.subject);
	}

	function handleDisconnect() {
		localStorage.setItem('user', '');
		localStorage.setItem('password', '');
		history.push('/')
	}

	useEffect(() => {
		setUsername(localStorage.getItem('user'));
		if (localStorage.getItem('user') === '') {
			alert('Acesso Negado');
			history.push('/');
		} else {
			api.get(`get-messages/${username}`).then(response => {
				setMessages(response.data);
				console.log(response.data);
			})
		}
	}, [username, history]);
	return (
		<>
			<TopLeftLines />
			<MessageContent isHidden={isHidden} setIsHidden={setIsHidden} sender={messageSender} subject={messageSubject}/>
			<main className={styles.teacherContainer}>
				<header className={styles.header}>
					<div className={`${styles.logOutContainer} ${styles.logOutFake}`}></div>
					<h1 className={styles.teacherTitle}>Mensagens</h1>
					<div className={styles.logOutContainer}>
						<h3 className={styles.usernameText}>
							{username}
						</h3>
						<button onClick={handleDisconnect} className={styles.button}>Desconectar</button>
					</div>
				</header>
				<div className={styles.teacherMessages}>
					{ messages.map(message => {
						return <Message a={'ada'} subject={message.subject} sender={message.sender} onClick={(e) => messageClicked(e)} />
					})}
				</div>
			</main>
			<BottomRightLines />
		</>
	)
}