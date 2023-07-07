import { useRef } from 'react';
import styles from './Color.module.scss'
export const Color = ({ color, check }) => {
    const ref = useRef(color)

    console.log(ref)
    return (
        <li className={styles.color} ref={ref}>
            {check}
        </li>
    );
}
