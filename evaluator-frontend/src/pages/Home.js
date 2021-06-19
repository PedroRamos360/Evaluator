import React from 'react';
import Input from '../components/Input';
import '../styles/global.css';
import styles from '../styles/pages/Home.module.css';

function App() {
	return (
		<main className={styles.homeContainer}>
			<div>
				<h1 className={styles.homeTitle}>Evaluator</h1>
				<p className={styles.homeDetails}>Melhore suas aulas ouvindo a opinião de seus alunos!</p>
			</div>
			<div className={styles.homeInputGroup}>
				<Input text='Usuário'/>
				<Input text='Senha'/>
			</div>
		</main>
	);
}

export default App;
