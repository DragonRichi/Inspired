import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Main.module.scss'

export const Main = ({ children }) => {
    const { status } = useSelector(state => state.statusServer)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!status && location.pathname !== "/404") {
            navigate("/404")
        }
    }, [navigate, status, location])
    return (
        <div className={styles.main}>
            {children}
        </div >
    );
}

