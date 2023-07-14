import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { ColorList } from '../ColorList/ColorList';
import { BtnLike } from '../BtnLike/BtnLike';
import styles from './Product.module.scss'
export const Product = ({ id, pic, title, price, colors }) => {
    return (
        <article className={styles.product}>
            <NavLink to={`/product/${id}`} className={styles.link}>
                <img className={styles.image} src={`${API_URL}/${pic}`} alt={title} />
                <h3 className={styles.title}>{title}</h3>
            </NavLink>
            <div className={styles.row}>
                <p className={styles.price}>руб {price}</p>
                <BtnLike id={id} />
            </div>
            <ColorList colors={colors} />
        </article>
    );
}
