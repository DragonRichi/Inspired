import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeSVG } from "../../assets/like.svg"
import styles from './BtnLike.module.scss'
import { addToFavorite, removeFromFavorite } from "../../features/favoritesSlice";
import classNames from 'classnames';
export const BtnLike = ({ id }) => {
    const dispatch = useDispatch()

    const isFavorite = useSelector(state => state.favorites.includes(id))

    const handleToggleFavorite = () => {
        console.log(isFavorite);
        if (isFavorite) {
            dispatch(removeFromFavorite({ id }))
        }
        else {
            dispatch(addToFavorite({ id }))

        }
    }

    return (
        <button className={isFavorite ? classNames(styles.like, styles.active) : styles.like}
            aria-label="Добавить в избранное"
            onClick={handleToggleFavorite}
            type="button">

            <LikeSVG />
        </button>
    );
}
