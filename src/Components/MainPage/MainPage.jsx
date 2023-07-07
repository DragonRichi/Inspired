import { useParams } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice';
import { Product } from '../Product/Product';
import styles from './MainPage.module.scss'
export const MainPage = ({ gender = "women" }) => {
    const { category } = useParams()
    const dispatch = useDispatch()
    const { goodsList } = useSelector(state => state.goods)
    useEffect(() => {
        dispatch(fetchGoods(gender))
    }, [gender, dispatch])
    return (
        <section className={styles.goods}>
            <Container>
                <h2 className={styles.title}>Новинки</h2>
                <ul className={styles.list}>
                    {goodsList?.map(item => (
                        <li key={item.id}>
                            <Product {...item} />
                        </li>
                    ))}
                </ul>
                {category && <p>Категория: {category}</p>}
            </Container>
        </section>
    );
}
