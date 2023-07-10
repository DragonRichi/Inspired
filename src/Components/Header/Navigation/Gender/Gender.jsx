import { NavLink } from 'react-router-dom';
import styles from './Gender.module.scss'
import classNames from 'classnames';
import { useSelector } from 'react-redux';

export const Gender = () => {
    const { genderList, activeGender, categories } = useSelector(state => state.navigation)

    return (
        <ul className={styles.gender}>
            {genderList.map(gender => (
                <li className={styles.item} key={gender}>
                    <NavLink className={({ isActive }) =>
                        classNames(styles.link, (isActive || gender === activeGender) && styles.linkActive)}
                        to={`catalog/${gender}`}>{categories[gender].title}</NavLink>
                </li>
            ))}
        </ul>
    )
}


