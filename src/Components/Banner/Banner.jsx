import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import { API_URL } from '../../const';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import styles from './Banner.module.scss'

export const Banner = ({ data }) => {
    const [image, setImage] = useState("")
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    const backgroundImage = image ? `url(${API_URL}/${image})` : ""

    useEffect(() => {
        if (isMobile) {
            setImage(data?.bg.mobile)
            console.log(data?.bg.mobile)
            console.log('Мобильное разрешение');
        } else if (isTablet) {
            setImage(data?.bg.tablet)
            console.log('Разрешение планшета');
        } else if (isLaptop) {
            setImage(data?.bg.laptop)
            console.log('Разрешение ноутбука');
        } else {
            setImage(data?.bg.desktop)
            console.log('Десктопное разрешение');
        }
    }, [isMobile, isTablet, isLaptop, data?.bg])

    return (
        <>
            {data &&
                <section className={styles.banner} style={{ backgroundImage }}>
                    <Container>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{data.description}</h2>
                            <NavLink to={`/product/${data.id}`} className={styles.link} >Перейти</NavLink>
                        </div>
                    </Container>
                </section>
            }
        </>
    );
}

