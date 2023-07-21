import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import * as Yup from "yup"
import styles from './Search.module.scss'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useNavigate } from 'react-router-dom';
import { toggleSearch } from '../../features/searchSlice';

export const Search = () => {
    const { openSearch } = useSelector(state => state.search)
    const dispatch = useDispatch()
    const initialValues = {
        search: "",
    }

    const validationSchema = Yup.object({
        search: Yup.string().required("Поле обязательно для заполнения")
    })

    const navigate = useNavigate()

    const handleSubmit = ({ search }, { resetForm }) => {
        if (search.trim()) {
            navigate(`/search?q=${search}`)
            resetForm()
            dispatch(toggleSearch(false))
        }
    }
    return (
        openSearch &&
        <div className={styles.search}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className={styles.form}>
                        <Field className={styles.input} type="search" name="search" placeholder="Найти..." />
                        <ErrorMessage name="search" component={"span"} className={styles.error} />
                        <button className={styles.btn} type="submit">Искать</button>
                    </Form>
                </Formik>
            </Container>
        </div>
    );
}

