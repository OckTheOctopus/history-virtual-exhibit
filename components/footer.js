import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <p>Yaseen Ahmed, 2022</p>
                <Link href='/bibliography'>
                    <a>Bibliography</a>
                </Link>
                <Link href='/'>
                    <a>Source</a>
                </Link>
            </div>
           

            <style jsx>{`
                p {
                    margin: 3vh;
                    text-align: center;
                }
            `}</style>
        </>
    );
}