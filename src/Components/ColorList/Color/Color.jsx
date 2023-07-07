import { useRef } from 'react';
import styles from './Color.module.scss'
export const Color = ({ color, check }) => {
    const ref = useRef(color)
    const t = ref.current;
    console.log(t)
    console.log(ref)
    return (
        <li className={styles.color}>
            {t}
        </li>
    );
}
