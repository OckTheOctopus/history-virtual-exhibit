import styles from '../styles/Home.module.css';
import Header from './header';
import Footer from './footer';

export default function Page({children}) {
    return (
        <div className={styles.container}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}