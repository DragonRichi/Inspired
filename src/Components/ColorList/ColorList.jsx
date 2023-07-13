import { useSelector } from 'react-redux';
import styles from './ColorList.module.scss'
import { Color } from './Color/Color';
import { ColorLabel } from './ColorLabel/ColorLabel';

export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
    const { colorsList } = useSelector(state => state.colors)
    return handleColorChange ? (
        <div className={styles.colorList}>
            {colors?.map((id, i) => {
                const color = colorsList.find(color => color.id === id)
                return <ColorLabel key={id} color={color} check={!i} selectedColor={selectedColor} handleColorChange={handleColorChange} />
            })}
        </div >
    )
        : (
            <ul className={styles.colorList}>
                {colors.map((id, i) => {
                    const color = colorsList.find(color => color.id === id)
                    return <Color key={id} color={color?.code} check={!i} />
                })}
            </ul>
        );
}

