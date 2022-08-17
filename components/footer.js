import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <p className='fixme'>Yaseen Ahmed, 2022</p>

                <Link href='/bibliography'>
                    <p className='fixme'><a>Bibliography</a></p>
                </Link>
                <Link href='https://github.com/OckTheOctopus/history-virtual-exhibit'>
                    <p className='fixme'><a>Source</a></p>
                </Link>
            </div>
           

            <style jsx>{`
                p {
                    margin: 3vh;
                    text-align: center;
                }
                .fixme {
                    display: flex;
                    justify-content: space-around;
                }
            `}</style>
        </>
    );
}