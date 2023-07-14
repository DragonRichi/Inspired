import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { Pagination } from '../Pagination/Pagination';
import styles from './Goods.module.scss'
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';
import { useEffect } from 'react';
import { fetchCategory } from '../../features/goodsSlice';

export const Goods = ({ title }) => {
    const { goodsList, pages } = useSelector(state => state.goods)
    const goods = goodsList.map(item => item.id)
    const dispatch = useDispatch()
    const page = usePageFromSearchParams(dispatch)

    useEffect(() => {
        if (goods) {
            const param = { list: goods }
            if (page) {
                param.page = page
            }
            // dispatch(fetchCategory(param))
        }
    }, [dispatch, page, pages])

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
                {pages > 0 && <Pagination />}
            </Container>
        </section>
    );
}
