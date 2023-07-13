import { useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import styles from './Goods.module.scss'

export const Goods = ({ title }) => {
    const { goodsList } = useSelector(state => state.goods)

    return (
        <section className={styles.goods}>
            <Container>
                <h2 className={styles.title}>{title ?? "Новинки"}</h2>
                <ul className={styles.list}>
                    {goodsList?.map(item => (
                        <li key={item.id}>
                            <Product {...item} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
