import { useSelector } from 'react-redux';
import styles from './Cart.module.scss'
import { Container } from '../../Layout/Container/Container';
import { CartItem } from './CartItem/CartItem';
export const Cart = ({ goodsList, cartItems }) => {
    const totalPrice = cartItems.reduce((sum, item) => {
        const product = goodsList.find(product => product.id === item.id)
        if (product) {
            return sum + (product.price * item.count)
        } else {
            return sum
        }
    }, 0)

    return (
        <section className={styles.cart}>
            <Container>
                <h2 className={styles.title}>Корзина</h2>
                {
                    goodsList.length ?
                        <ul className={styles.list}>
                            {cartItems.map(item => (
                                <li key={`${item.id}-${item.color}-${item.size}`} className={styles.item}>
                                    <CartItem goodsList={goodsList} {...item} />
                                </li>
                            ))}
                        </ul>
                        :
                        <h3 className={styles.empty}>В корзине пусто</h3>

                }
                <div className={styles.total}>
                    <p>Итого :</p>
                    <p>руб {totalPrice}</p>
                </div>
            </Container>
        </section>
    );
}
