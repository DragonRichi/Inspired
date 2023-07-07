import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";
import styles from './Header.module.scss'
export const Header = () =>
(
    <header className={styles.header}>
        <Top />
        <Navigation />
    </header>
)


