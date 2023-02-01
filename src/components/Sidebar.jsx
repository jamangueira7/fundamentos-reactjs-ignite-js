import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import {Avatar} from "./Avatar.jsx";

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar src={"https://github.com/jamangueira7.png"} />
                <strong>João Mangueira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#" >
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
);
}


