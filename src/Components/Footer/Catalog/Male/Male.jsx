import styles from '../../Footer.module.scss'
import classNames from "classnames"

export const Male = () => {
    return (
        <>

            <ul className={styles.sublist}>
                <h4 className={styles.subtitle}>Мужчины</h4>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Трусы</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Носки</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Халаты</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Термобелье</a></li>
            </ul >
        </>
    );
}
