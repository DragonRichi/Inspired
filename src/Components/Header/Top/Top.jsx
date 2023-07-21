import { Container } from "../../Layout/Container/Container";
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from "../../../assets/like.svg"
import { ReactComponent as SearchSVG } from "../../../assets/search.svg"
import { ReactComponent as CartSVG } from "../../../assets/cart.svg"
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import logo from "/src/assets/logo.svg"
import styles from './Top.module.scss'
import { toggleSearch } from "../../../features/searchSlice";

export const Top = () => {
    const { countItems } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const handleOpenSearch = () => {
        dispatch(toggleSearch())
    };

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
                            <button className={styles.topLink} onClick={handleOpenSearch}>
                                <SearchSVG />
                            </button>
                        </li>
                        <li className={styles.topNavItem}>
                            <NavLink to="/cart" className={styles.topLink}>
                                <CartSVG />
                                <span className={styles.topLinkCount}>{countItems}</span>
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
