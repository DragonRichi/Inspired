import { NavLink } from "react-router-dom"
import styles from './Category.module.scss'
import classNames from "classnames"
import { useSelector } from "react-redux"

export const Category = () => {

    const { activeGender, categories, genderList } = useSelector(state => state.navigation)
    return (
        <ul className={styles.category}>
            {categories[activeGender]?.list?.map((item) => (
                <li key={item.slug} className={styles.item}>
                    <NavLink to={`${activeGender}/${item.slug}`} className={({ isActive }) => classNames(styles.link, isActive && styles.linkActive)}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}