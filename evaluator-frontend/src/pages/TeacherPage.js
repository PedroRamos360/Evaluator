import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import styles from '../styles/pages/TeacherPage.module.css';
import TopLeftLines from '../components/TopLeftLines';
import BottomRightLines from '../components/BottomRightLines';
import Message from '../components/Message';
import MessageContent from '../components/MessageContent';

export default function TeacherPage() {
	const history = useHistory();
	const [isHidden, setIsHidden] = useState(true);
	function messageClicked() {
		setIsHidden(false);
	}
	return (
		<>
			<TopLeftLines />
			<MessageContent isHidden={isHidden} setIsHidden={setIsHidden}/>
			<main className={styles.teacherContainer}>
				<header className={styles.header}>
					<div className={`${styles.logOutContainer} ${styles.logOutFake}`}></div>
					<h1 className={styles.teacherTitle}>Mensagens</h1>
					<div className={styles.logOutContainer}>
						<h3 className={styles.usernameText}>
							PedroRamos360
						</h3>
						<button onClick={() => { history.push('/')}} className={styles.button}>Desconectar</button>
					</div>
				</header>
				<div className={styles.teacherMessages}>
					{ }
					<Message onClick={messageClicked} />
					<Message onClick={messageClicked} />
					<Message onClick={messageClicked} />
					<Message onClick={messageClicked} />

				</div>
			</main>
			<BottomRightLines />
		</>
	)
}