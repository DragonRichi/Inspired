import { useSelector } from 'react-redux';
import { Container } from '../Components/Layout/Container/Container';
import { Product } from '../Components/Product/Product';
import styles from './Goods.module.scss'

export const Goods = ({ categoryData }) => {
    const { goodsList } = useSelector(state => state.goods)


    const title = categoryData?.title ?? "Новинки"


    return (
        <section className={styles.goods}>
            <Container>
                <h2 className={styles.title}>{title}</h2>
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
