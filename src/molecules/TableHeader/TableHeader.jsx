import cn from "classnames"
import style from './TableHeader.module.scss'
import { weeks } from "constants"

export const TableHeader = ({year}) => {
    
    return (
        <ul className={cn('list-reset', style.list)}>
            <li className={style.year}>
                {year}
            </li>
            {
                weeks.map((day, index) => (
                    <li key={index} className={cn(
                        style.dayCell,
                        (day === 'сб' ||
                            day === 'вс') && style.weekend
                    )
                    }>{day}</li>
                ))
            }
        </ul>
    )
}