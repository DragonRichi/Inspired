import { useEffect, useRef } from 'react';
import styles from './Color.module.scss'
import classNames from 'classnames';
export const Color = ({ color, check }) => {
    const colorRef = useRef(null)
    useEffect(() => {
        colorRef.current.style.setProperty("--data-color", color)
    }, [color])
    return (
        <li className={classNames(styles.color, check ? styles.colorCheck : "")} ref={colorRef} />

    );
}
