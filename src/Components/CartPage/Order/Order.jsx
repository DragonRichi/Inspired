import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Container } from '../../Layout/Container/Container';
import { PatternFormat } from 'react-number-format';
import * as Yup from "yup"

import styles from './Order.module.scss'
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../../features/cartSlice';

export const Order = ({ cartItems }) => {
    const dispatch = useDispatch()

    const handleSubmitOrder = (values) => {
        dispatch(sendOrder({ order: cartItems, values }))
    }

    const validationSchema = Yup.object({
        fio: Yup.string().required("Введите ФИО"),
        address: Yup.string().test(
            "deliveryTest",
            "Введите адрес доставки",
            function (value) {
                return this.parent.delivery === "delivery" ? !!value : true
            }
        ),
        phone: Yup.string().required("Введите номер телефона").matches(/^\+\d{3}\-\d{2}\-\d{3}\-\d{2}\-\d{2}$/, "Некорректный номер телефона"),
        email: Yup.string().email("Некорректный формат email").required("Введите email"),
        delivery: Yup.string().required("Выберите способ доставки")
    })


    return (
        <section>
            <Container>
                <h2 className={styles.title}>Оформление заказа</h2>
                <Formik
                    initialValues={{
                        fio: "Гаро",
                        address: "Боливия",
                        phone: "+222-22-222-22-22",
                        email: "dadaa@mail.ru",
                        delivery: ""
                    }}
                    onSubmit={handleSubmitOrder}
                    validationSchema={validationSchema}
                >
                    <Form className={styles.form}>
                        <fieldset className={styles.personal}>
                            <label className={styles.label}>
                                <Field
                                    className={styles.input}
                                    type="text"
                                    placeholder="ФИО*"
                                    name="fio"
                                />
                                <ErrorMessage className={styles.error} name="fio" component={"span"} />
                            </label>
                            <label className={styles.label}>
                                <Field
                                    className={styles.input}
                                    type="text"
                                    placeholder="Адрес доставки"
                                    name="address"
                                />
                                <ErrorMessage className={styles.error} name="address" component={"span"} />
                            </label>
                            <label className={styles.label}>
                                <Field
                                    as={PatternFormat}
                                    format="+###-##-###-##-##"
                                    mask="_"
                                    className={styles.input}
                                    placeholder="Телефон*"
                                    name="phone"
                                />
                                <ErrorMessage className={styles.error} name="phone" component={"span"} />
                            </label>
                            <label className={styles.label}>
                                <Field
                                    className={styles.input}
                                    type="mail"
                                    placeholder="Email*"
                                    name="email"
                                />
                                <ErrorMessage className={styles.error} name="email" component={"span"} />
                            </label>
                        </fieldset>
                        <fieldset className={styles.radioList}>
                            <label className={styles.radio}>
                                <Field
                                    className={styles.radioInput}
                                    type="radio"
                                    name="delivery"
                                    value="delivery"
                                />
                                <span>Доставка</span>
                            </label>
                            <label className={styles.radio}>
                                <Field
                                    className={styles.radioInput}
                                    type="radio"
                                    name="delivery"
                                    value="self"
                                />
                                <span>Самовывоз</span>
                            </label>
                            <ErrorMessage className={styles.error} name="delivery" component={"span"} />
                        </fieldset>
                        <button className={styles.submit} type="submit">
                            Оформить
                        </button>
                    </Form>

                </Formik>
            </Container>
        </section>
    );
}

