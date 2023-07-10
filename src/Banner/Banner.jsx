import { NavLink } from 'react-router-dom';
import { Container } from '../Components/Layout/Container/Container';
import { API_URL } from '../const';
import { useEffect } from 'react';
import { useMedia } from 'react-use';
import styles from './Banner.module.scss'

export const Banner = ({ data, category }) => {
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');
    console.log(data)

    useEffect(() => {
        if (isMobile) {
            console.log('Мобильное разрешение');
        } else if (isTablet) {
            console.log('Разрешение планшета');
        } else if (isLaptop) {

            console.log('Разрешение ноутбука');
        } else {
            console.log('Десктопное разрешение');
        }
    }, [isMobile, isTablet, isLaptop])

    return (
        <>
            {!category && data &&
                <section className={styles.banner} style={{ backgroundImage: `url(${API_URL}/${data.bg.desktop})` }}>
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

