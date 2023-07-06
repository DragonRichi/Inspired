import { NavLink, useLocation } from 'react-router-dom';
import styles from './Gender.module.scss'
import classNames from 'classnames';

export const Gender = ({ list }) => {
    const location = useLocation()
    const gender = location.pathname.split("/")[1] || "women"

    return (
        <ul className={styles.gender}>
            {list.map(item => (
                <li className={styles.item} key={item.link}>
                    <NavLink state={item.link} className={({ isActive }) =>
                        classNames(styles.link, (isActive || gender === item.link) && styles.linkActive)}

                        to={item.link}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
    )
}


