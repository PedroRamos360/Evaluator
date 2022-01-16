import React, { useState } from 'react';
import Input from '../components/Input';
import '../styles/global.css';
import styles from '../styles/pages/Home.module.css';
import { useHistory, Link } from 'react-router-dom';
import TopLeftLines from '../components/TopLeftLines';
import BottomRightLines from '../components/BottomRightLines';
import api from '../services/api';

function App() {
	const history = useHistory();
	const [user, setUser] = useState();
	const [password, setPassword] = useState();

	async function handleButtonClicked() {
		await api.get('get-users').then(response => {
			const users = response.data;
			let userExists = false;
			users.forEach(userGot => {
				console.log([userGot.username, user])
				if (userGot.username === user) {
					userExists = true;
				}
			});
			if (userExists) {
				console.log("usuário existe!!!")
				// mandar api.post para verificação de usuário (ainda não existe no backend)
			} else {
				console.log('usuário não existe!!!')
				api.post('create-user', {
					username: user,
					password: password,
				});
			}
		});
		history.push('teacherpage')
	}
	return (
		<>
		<TopLeftLines />
		<main className={styles.homeContainer}>
			<div>
				<h1 className={styles.homeTitle}>Evaluator</h1>
				<p className={styles.homeDetails}>Melhore suas aulas ouvindo a opinião de seus alunos!</p>
			</div>
			<div className={styles.homeInputGroup}>
				<Input
					text='Usuário'
					value={user}
					onChange={event => {
						setUser(event.target.value);
					}}
				/>
				<Input
					type='password'
					text='Senha'
					value={password}
					onChange={event => {
						setPassword(event.target.value);
					}}
				/>
				<button onClick={handleButtonClicked} className={styles.homeButton}>Entrar</button>
				<Link to="/sendmessage" className={styles.link}>Ou, se for um aluno, clique aqui para mandar uma mensagem</Link>
			</div>
		</main>
		<BottomRightLines />
		</>
	);
}

export default App;
