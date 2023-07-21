import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../../const";
import styles from './CartItem.module.scss'
import classNames from "classnames";
import { Count } from "../../../Count/Count";
import { addToCart, removeFromCart } from "../../../../features/cartSlice";

export const CartItem = ({ goodsList, id, color, size, count }) => {
    const dispatch = useDispatch()
    const { colorsList } = useSelector(state => state.colors)
    const item = goodsList.find(item => item.id === id)

    const handleCountChange = (count) => {
        dispatch(addToCart({ id, color, size, count }))
    }
    const handleRemoveItem = () => {
        dispatch(removeFromCart({ id, color, size }))
    }

    return (
        <article className={styles.item}>
            <img className={styles.image} src={`${API_URL}/${item?.pic}`} alt={item?.title} />
            <div className={styles.content}>
                <h3 className={styles.title}>{item?.title}</h3>
                <p className={styles.price}>руб {item?.price}</p>
                <div className={styles.vendorCode}>
                    <span className={styles.subtitle}>Артикул&nbsp;</span>
                    <span>{id}</span>
                </div>
            </div>
            <div className={styles.prop}>
                <div className={styles.color}>
                    <p className={classNames(styles.subtitle, styles.colorTitle)}>Цвет</p>
                    <div
                        className={styles.colorItem}
                        style={{ "--data-color": colorsList?.find(item => item.title === color)?.code }}>

                    </div>
                </div>
                <div className={styles.size}>
                    <p className={classNames(styles.subtitle, styles.sizeTitle)}>Размер</p>
                    <div className={styles.sizeItem}>{size}</div>
                </div>
            </div>
            <button className={styles.del} aria-label="Удалить товар из корзины" onClick={handleRemoveItem}></button>
            <Count
                className={styles.count}
                count={count}
                handleDecrement={() => {
                    if (count > 1) {
                        handleCountChange(count - 1)
                    }
                }}
                handleIncrement={() => {
                    handleCountChange(count + 1)
                }} />



        </article >
    );
}
