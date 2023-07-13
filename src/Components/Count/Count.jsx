import classNames from 'classnames';
import styles from './Count.module.scss'

export const Count = ({ handleIncrement, handleDecrement, count, className }) => {
    return (
        <div className={classNames(styles.count, className)}>
            <button className={styles.item} type='button' onClick={handleDecrement}>-</button>
            <span className={classNames(styles.item, styles.number)} type='button' >{count}</span>
            <button className={styles.item} type='button' onClick={handleIncrement}>+</button>
        </div>
    );
}
