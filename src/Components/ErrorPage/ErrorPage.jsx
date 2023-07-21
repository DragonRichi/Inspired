import { useLocation, useNavigate, useRouteError } from "react-router-dom"
import styles from './ErrorPage.module.scss'
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchColors } from "../../features/colorsSlice"
import { fetchNavigation } from "../../features/navigationSlice"

export const ErrorPage = () => {
    const { status } = useSelector(state => state.statusServer)

    const location = useLocation()
    const routeError = useRouteError()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const timerIdRef = useRef(null)

    useEffect(() => {
        if (status && location.pathname == "/404") {
            navigate("/")
        }
    }, [navigate, status, location])

    useEffect(() => {
        if (!status && location.pathname === "/404") {
            clearInterval(timerIdRef.current)
            timerIdRef.current = setInterval(() => {
                dispatch(fetchColors())
                dispatch(fetchNavigation())
            }, 3000)
        }
        return () => {
            clearInterval(timerIdRef.current)
        }
    }, [dispatch, status, location])

    return (
        <div className={styles.error}>
            <h2 className={styles.title}>Произошла ошибка, попробуйте зайти позже</h2>
            <p className={styles.message}>{routeError?.message ?? "Неизвестная ошибка"}</p>
        </div>
    );
}
