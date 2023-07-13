import classNames from 'classnames';
import styles from './ProductSize.module.scss'
import { useEffect } from 'react';

export const ProductSize = ({ size, handleSizeChange, selectedSize }) => {

    return (
        <div className={styles.size}>
            <p className={styles.title}>Размер</p>
            <div className={styles.list}>
                {size?.map((item) => {
                    return (
                        <label className={styles.item} key={item}>
                            <input
                                className={styles.input}
                                type='radio'
                                name='size'
                                value={item}
                                checked={selectedSize === item}
                                onChange={handleSizeChange}
                            />
                            <span className={styles.check}>{item}</span>

                        </label>
                    )
                })}
            </div>
        </div>
    );
}