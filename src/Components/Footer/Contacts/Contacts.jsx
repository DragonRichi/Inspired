import styles from '../Footer.module.scss'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <a href="mailto:inspired@gmail.com" >Inspired@gmail.com</a>
            <a href="tel:89304902620">8 930 490 26 20</a>
        </div>
    );
}

export default Contacts;