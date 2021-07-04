import React from 'react';

import styles from '../styles/pages/TeacherPage.module.css';
import TopLeftLines from '../components/TopLeftLines';
import BottomRightLines from '../components/BottomRightLines';
import Message from '../components/Message';

export default function TeacherPage() {

	return (
		<>
			<TopLeftLines />
			<main className={styles.teacherContainer}>
				<h1 className={styles.teacherTitle}>Mensagens</h1>
				<div className={styles.teacherMessages}>
					{ }
					<Message />
					<Message />
					<Message />
					<Message />
				</div>
			</main>
			<BottomRightLines />
		</>
	)
}