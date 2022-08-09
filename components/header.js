import styles from '../styles/Home.module.css';


export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>East Meets West</h1>
                <h2 className={styles.description}>An exhibit on the first contact between the Dutch East India Company and the inhabitants of the Indonesian archipelago.</h2>
            </header>
        </div>
    );
}