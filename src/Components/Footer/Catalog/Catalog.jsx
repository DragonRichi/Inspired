import classNames from 'classnames';
import styles from '../Footer.module.scss'
import { Female } from './Female/Female';
import { Male } from './Male/Male';
export const Catalog = () => {
    return (
        <div className={styles.category}>
            <div className={classNames(styles.title, styles.Title, styles.list)}>Каталог</div>
            <div className={styles.list}>
                <Female />
                <Male />
            </div>
        </div>
    );
}
