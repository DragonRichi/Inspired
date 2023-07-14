import { Container } from "../../Layout/Container/Container";
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from "../../../assets/like.svg"
import { ReactComponent as SearchSVG } from "../../../assets/search.svg"
import { ReactComponent as CartSVG } from "../../../assets/cart.svg"

import classNames from "classnames";
import logo from "/src/assets/logo.svg"
import styles from './Top.module.scss'

export const Top = () => {
    return (
        <div className={styles.top}>
            <Container className={styles.topContainer}>
                <a className={classNames(styles.topLink, styles.topPhone)} href="tel:89304902620">8 930 490 26 20</a>
                <NavLink to="/" className={styles.topLogo}>
                    <img src={logo} alt={logo} />
                </NavLink>
                <div className={styles.topNavigation}>
                    <ul className={styles.topNavList}>
                        <li className={styles.topNavItem}>
                            <button className={styles.topLink}>
                                <SearchSVG />
                            </button>
                        </li>
                        <li className={styles.topNavItem}>
                            <NavLink to="/cart" className={styles.topLink}>
                                <CartSVG />
                            </NavLink>
                        </li>
                        <li className={styles.topNavItem}>
                            <NavLink to="/favorite" className={classNames(styles.topLink, styles.like)}>
                                <LikeSVG />

                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
