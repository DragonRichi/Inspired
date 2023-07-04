import cn from "classnames"
import styles from './Container.module.scss'

export const Container = ({ children, className }) => {
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div >
    );
}

