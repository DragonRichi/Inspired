import { Container } from "../Layout/Container/Container";
import { Social } from "./Social/Social";
import { Catalog } from "./Catalog/Catalog";
import styles from './Footer.module.scss'
import Contacts from "./Contacts/Contacts";

export const Footer = () => {
    return (
        <footer>
            <Container className={styles.container}>
                <Catalog />
                <Social />
                <Contacts />
                <div className={styles.copyright}>© INSPIRED, 2023</div>
                <div className={styles.development}>
                    <div className={styles.list}>Designer: Anastasia Ilina</div>
                    <div className={styles.list}>Developer: </div>
                </div>
            </Container>
        </footer>
    );
}
