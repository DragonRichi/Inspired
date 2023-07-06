import { NavLink, useLocation } from "react-router-dom"
import styles from './Category.module.scss'
import classNames from "classnames"

export const Category = ({ list }) => {

    const location = useLocation()

    return (
        <div>
            <ul className={styles.category}>
                {list.map((item) => (
                    item.categories.map((category) => (
                        <li key={category.link} >

                            <NavLink state={item.link} to={`${item.link}/${category.link}`} className={styles.link}>
                                {category.title}
                            </NavLink>
                        </li>
                    ))
                ))}
            </ul>
        </div >
    )
}