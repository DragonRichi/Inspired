import { useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { Pagination } from '../Pagination/Pagination';
import styles from './Goods.module.scss'
import { Preloader } from '../Preloader/Preloader';

export const Goods = ({ title }) => {
    const { goodsList, status, totalCount } = useSelector(state => state.goods)
    return (
        <section className={styles.goods}>
            <Container>
                <h2 className={styles.title}>

                    {title ?? "Новинки"}
                    {totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ""}
                </h2>
                {status === "loading" ? <Preloader /> :
                    <>
                        <ul className={styles.list}>
                            {goodsList?.map(item => (
                                <li key={item.id}>
                                    <Product {...item} />
                                </li>
                            ))}
                        </ul>
                        <Pagination />
                    </>}
            </Container>
        </section>
    );
}
