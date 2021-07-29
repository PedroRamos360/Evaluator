import React from 'react';
import Input from '../components/Input';
import '../styles/global.css';
import styles from '../styles/pages/Home.module.css';
import { useHistory, Link } from 'react-router-dom';
import TopLeftLines from '../components/TopLeftLines';
import BottomRightLines from '../components/BottomRightLines';

function App() {
	const history = useHistory();
	return (
		<>
		<TopLeftLines />
		<main className={styles.homeContainer}>
			<div>
				<h1 className={styles.homeTitle}>Evaluator</h1>
				<p className={styles.homeDetails}>Melhore suas aulas ouvindo a opinião de seus alunos!</p>
			</div>
			<div className={styles.homeInputGroup}>
				<Input text='Usuário'/>
				<Input type='password' text='Senha'/>
				<button onClick={() => { history.push('teacherpage')} } className={styles.homeButton}>Entrar</button>
				<Link to="/sendmessage" className={styles.link}>Ou, se for um aluno, clique aqui para mandar uma mensagem</Link>
			</div>
		</main>
		<BottomRightLines />
		</>
	);
}

export default App;
