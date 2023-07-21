import { useDispatch, useSelector } from "react-redux";
import styles from "./OrderModal.module.scss";
import { API_URL } from "../../../const.js";
import { clearCart } from "../../../features/cartSlice.js";

export const OrderModal = () => {
  const {
    order: { values, order, id, totalPrice },
  } = useSelector((state) => state.cart);
  const { goodsList } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(clearCart());
  };


  const handleModalClick = (e) => {
    e.stopPropagation()
  }


  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <div className={styles.body} onClick={handleModalClick}>
        <h2 className={styles.title}>Заказ оформлен №{id}</h2>

        <div className={styles.description}>
          <p>Спасибо за выбор нашего магазина!</p>
          <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
        </div>

        <ul className={styles.customer}>
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Получатель</span>
            <span className={styles.customerData}>{values.fio}</span>
          </li>
          {values.delivery === "delivery" && (
            <li className={styles.customerItem}>
              <span className={styles.customerTitle}>Адрес доставки</span>
              <span className={styles.customerData}>{values.address}</span>
            </li>
          )}
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Телефон</span>
            <span className={styles.customerData}>{values.phone}</span>
          </li>
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>E-mail</span>
            <span className={styles.customerData}>{values.email}</span>
          </li>
          <li className={styles.customerItem}>
            <span className={styles.customerTitle}>Способ получения</span>
            <span className={styles.customerData}>
              {values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'}
            </span>
          </li>
        </ul>

        <ul className={styles.goods}>
          {order.map((item) => {
            const product = goodsList.find((product) => product.id === item.id);
            return (
              <li
                className={styles.goodsItem}
                key={`${item.id}${item.color}${item.size}`}
              >
                <img
                  className={styles.goodsImg}
                  src={`${API_URL}/${product.pic}`}
                  alt={product.title}
                />
                <p className={styles.goodsCount}>X{item.count}</p>
              </li>
            );
          })}
        </ul>

        <div className={styles.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>

        <button className={styles.close} onClick={handleCloseModal}></button>
      </div>
    </div>
  );
};
