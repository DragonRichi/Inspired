import { useEffect, useRef } from 'react';
import styles from './ColorLabel.module.scss'
import classNames from 'classnames';
export const ColorLabel = ({ color, check, handleColorChange, selectedColor }) => {
    const colorRef = useRef(null)
    useEffect(() => {
        colorRef.current.style.setProperty("--data-color", color?.code)
    }, [color])
    return (
        <label className={styles.color} ref={colorRef}>
            <input className={styles.input}
                type='radio'
                name='color'
                value={color?.title}
                checked={selectedColor ? selectedColor === color?.title : check}
                onChange={handleColorChange}
            />
            <span className={styles.colorCheck}></span>

        </label>

    );
}
