import { NavLink, useLocation } from 'react-router-dom';
import styles from './Gender.module.scss'
import classNames from 'classnames';

export const Gender = ({ list }) => {
    console.log(useLocation())
    return (
        <ul className={styles.gender}>
            {list.map(item => (
                <li className={styles.item} key={item.link}>
                    <NavLink state={item.link} className={({ isActive }) => classNames(styles.link, isActive && styles.linkActive)} to={item.link}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
    )
}


