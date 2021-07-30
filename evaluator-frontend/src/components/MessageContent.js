import React from 'react';

import styles from '../styles/components/MessageContent.module.css';
import { FiX } from "react-icons/fi";

export default function MessageContent({ isHidden, setIsHidden }) {
	return (
		<main className={isHidden ? styles.backgroundHidden : styles.background}>
			<header className={styles.header}>
				<div>
					<h1>Volume de atividades</h1>
					<h2 className={styles.sender}>Anônimo</h2>
				</div>
				<button className={styles.closeButton}>
					<FiX onClick={() => {setIsHidden(true)}}/>
				</button>
			</header>
			<p className={styles.messageText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim tortor
				at auctor. Libero nunc consequat interdum varius sit. Varius quam quisque id diam vel. Duis
				ut diam quam nulla porttitor massa. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse
				sed. Commodo quis imperdiet massa tincidunt nunc pulvinar. Convallis tellus id interdum velit laoreet id.
				Viverra nam libero justo laoreet. Proin sagittis nisl rhoncus mattis rhoncus. Sem viverra aliquet eget sit.
				Diam quis enim lobortis scelerisque fermentum dui faucibus. Viverra maecenas accumsan lacus vel
				facilisis volutpat est velit. Pellentesque habitant morbi tristique senectus et netus et malesuada.
				Integer feugiat scelerisque varius morbi enim nunc. Magna fringilla urna porttitor rhoncus dolor purus.
				Vel facilisis volutpat est velit. Diam phasellus vestibulum lorem sed. Nibh sed pulvinar proin gravida.
				Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Nullam eget felis eget nunc
				lobortis mattis aliquam faucibus purus. Ac auctor augue mauris augue. Aliquam ut porttitor leo a diam
				sollicitudin tempor id. Neque egestas congue quisque egestas diam in. Nunc mi ipsum faucibus vitae aliquet
				nec ullamcorper. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Sapien pellentesque
				habitant morbi tristique.
			</p>
			<footer className={styles.footer}>
				<button className={styles.markAsReadButton}>Marcar como lida</button>
			</footer>
		</main>
	)
}