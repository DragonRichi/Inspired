import classNames from 'classnames';
import styles from '../Footer.module.scss'
import { Female } from './Female/Female';
import { Male } from './Male/Male';
export const Catalog = () => {
    return (
        <div className={styles.category}>
            <h3 className={classNames(styles.title, styles.Title, styles.list)}>Каталог</h3>
            <div className={styles.list}>
                <Female />
                <Male />
            </div>
        </div>
    );
}
