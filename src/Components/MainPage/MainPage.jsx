import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../features/goodsSlice';
import { setActiveGender } from '../../features/navigationSlice';
import { Goods } from '../Goods/Goods';
import { Banner } from '../Banner/Banner';
export const MainPage = () => {
    const dispatch = useDispatch()
    const { activeGender, categories, genderList } = useSelector(state => state.navigation)
    const { gender, category } = useParams()

    const genderData = categories[activeGender]
    const categoryData = genderData?.list.find(item => item.slug === category)

    useEffect(() => {
        if (gender) {
            dispatch(setActiveGender(gender))
        } else if (genderList[0]) {
            dispatch(setActiveGender(genderList[0]))
            dispatch(fetchGender(genderList[0]))
        }
    }, [gender, dispatch, genderList])

    useEffect(() => {
        if (gender && category) {
            dispatch(fetchCategory({ gender, category }))
            return;
        }
        if (gender) {
            dispatch(fetchGender(gender))
            return;
        }
    }, [gender, category, dispatch])

    return (
        <>
            {!category && <Banner data={genderData?.banner} gender={gender} category={category} />}
            <Goods category={category} categoryData={categoryData} />
        </>

    );
}
