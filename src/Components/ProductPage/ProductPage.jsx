import { useEffect, useState } from 'react';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';
import { ColorList } from '../ColorList/ColorList';
import { Count } from '../Count/Count';
import { ProductSize } from '../ProductSize/ProductSize';
import { Goods } from '../Goods/Goods';
import { fetchCategory } from '../../features/goodsSlice';
import { BtnLike } from '../BtnLike/BtnLike';

import classNames from 'classnames';
import styles from './ProductPage.module.scss'
import { addToCart } from '../../features/cartSlice';

export const ProductPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { product } = useSelector(state => state.product)
    const { colorsList } = useSelector(state => state.colors)

    const { gender, category, colors } = product


    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")

    const [count, setCount] = useState(1)

    const handleColorChange = e => {
        setSelectedColor(e.target.value)
    }
    const handleSizeChange = e => {
        setSelectedSize(e.target.value)
    }

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    useEffect(() => {
        // dispatch(fetchGender(gender)) 
        dispatch(fetchCategory({ category, gender, count: 4, top: true, exclude: id }))
    }, [gender, category, id, dispatch])

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        if (colorsList?.length && colors?.length) {
            setSelectedColor(colorsList.find((color) => color.id === colors[0]).title)
        }
    }, [colorsList, colors])

    return (
        <>
            <section className={styles.card}>
                <Container className={styles.container}>
                    <img src={`${API_URL}/${product.pic}`} alt={product.title} className={styles.image} />
                    <form className={styles.content} onSubmit={e => {
                        e.preventDefault();
                        if (selectedSize === "") {
                            alert("Выбери ебаный в рот размер!")
                            return;
                        }
                        dispatch(addToCart({
                            id, color: selectedColor, size: selectedSize, count
                        }))

                    }}>
                        <h2 className={styles.title}>{product.title}</h2>
                        <p className={styles.price}>руб {product.price}</p>
                        <div className={styles.vendorCode}>
                            <span className={styles.subtitle}>Артикул</span>
                            <span className={styles.id}>{product.id}</span>
                        </div>
                        <div className={styles.color}>
                            <p className={classNames(styles.subtitle, styles.colorTitle)}>Цвет</p>
                            <ColorList colors={colors} selectedColor={selectedColor} handleColorChange={handleColorChange} />
                        </div>
                        <ProductSize id={product.id} size={product.size} handleSizeChange={handleSizeChange} selectedSize={selectedSize} />
                        <div className={styles.description}>
                            <p className={classNames(styles.subtitle, styles.descriptionTitle)}>Описание</p>
                            <p className={styles.descriptionText}>{product.description}</p>
                        </div>
                        <div className={styles.control}>
                            <Count className={styles.count} count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                            <button className={styles.addCart} type='submit'>В корзину</button>
                            <BtnLike id={id} className="favorite" />
                        </div>
                    </form>
                </Container>
            </section>
            <Goods title="Вам также может понравиться" />
        </>
    );
}
