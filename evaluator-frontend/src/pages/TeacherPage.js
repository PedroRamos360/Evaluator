import React, { useState } from 'react';

import styles from '../styles/pages/TeacherPage.module.css';
import TopLeftLines from '../components/TopLeftLines';
import BottomRightLines from '../components/BottomRightLines';
import Message from '../components/Message';
import MessageContent from '../components/MessageContent';

export default function TeacherPage() {
	const [isHidden, setIsHidden] = useState(true);
	function messageClicked() {
		setIsHidden(false);
	}
	return (
		<>
			<TopLeftLines />
			<MessageContent isHidden={isHidden} setIsHidden={setIsHidden}/>
			<main className={styles.teacherContainer}>
				<h1 className={styles.teacherTitle}>Mensagens</h1>
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