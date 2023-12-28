import cn from 'classnames'
import style from './Cell.module.scss'
import { price } from 'constants'

export const Cell = ({
    id,
    day,
    month,
    currentCells,
    setCurrentCells,
    setStartElement
}) => {
    if (!day) {
        return (
            <li className={style.cell} />
        )
    } else {
        return (
            <li
                className={cn(style.cell, currentCells.includes(id) && style.activeCell)}
                onClick={() => setCurrentCells(
                    old => !old.includes(id) ?
                        ([...old, id]) :
                        ([...old.filter(item => item !== id)])

                )}
                //onMouseDown={() => setStartElement(id)}
            >
                <span className={style.cellTitle}>{day} {month}</span>
                <ul className={cn('list-reset', style.list)}>
                    {
                        price.map(item => (
                            <li className={style.item}>{item}</li>
                        ))
                    }
                </ul>
            </li>
        )
    }
}