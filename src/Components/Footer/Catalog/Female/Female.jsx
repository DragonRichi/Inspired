import styles from '../../Footer.module.scss'
import classNames from "classnames"
export const Female = () => {
    return (
        <>

            <ul className={styles.sublist}>
                <h4 className={styles.subtitle}>Женщины</h4>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Бюстгальтеры</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Трусы</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Носки</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Халаты</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Термобелье</a></li>
                <li className={classNames(styles.link, styles.categorySubtitle)}><a href="/">Пижамы</a></li>
            </ul >
        </>
    );
}