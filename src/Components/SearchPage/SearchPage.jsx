import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchPage.module.scss'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAll } from '../../features/goodsSlice';
import { Goods } from '../Goods/Goods';

export const SearchPage = () => {
    const { goodsList } = useSelector(state => state.goods)

    const dispatch = useDispatch()

    let [searchParams] = useSearchParams()
    console.log(searchParams)

    useEffect(() => {
        const search = searchParams.get("q")
        const params = { search }
        dispatch(fetchAll(params))
    }, [searchParams, dispatch])

    return (
        goodsList.length ?
            <Goods title="Избранное" />
            :
            <h3 className={styles.empty}>Ничего не найдено по запросу {searchParams.get("q")}</h3>
    );
}

