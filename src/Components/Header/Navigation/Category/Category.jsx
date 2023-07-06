import { NavLink, useLocation } from "react-router-dom"
import styles from './Category.module.scss'
import classNames from "classnames"

export const Category = ({ list }) => {

    const location = useLocation()
    const gender = location.pathname.split("/")[1] || "women"

    const categoriesList = list.find(item => item.link === gender)

    return (
        <ul className={styles.category}>
            {categoriesList.categories.map((item) => (
                <li key={item.link} className={styles.item}>
                    <NavLink to={`${gender}/${item.link}`} className={({ isActive }) => classNames(styles.link, isActive && styles.linkActive)}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}