import cn from 'classnames'
import style from './Row.module.scss'
import { place } from 'constants'
import { Cell } from 'atoms/Cell/Cell'
import { currentMonth } from 'constants'
import { useMemo } from 'react'
import { shortCurrentMonth } from 'constants'
export { Cell } from 'atoms/Cell/Cell'

export const Row = ({
    time,
    setCurrentCells,
    currentCells,
    startElement,
    setStartElement
}) => {
    const year = time.year()
    const month = currentMonth[time.month()]
    const shortMonth = shortCurrentMonth[time.month()]
    const startMonth = time.startOf('month')
    //const endMonth = time.endOf('month')
    const lenghtMonth = time.daysInMonth()
    const daysArr = useMemo(() => {
        const arr = new Array(35).fill(null)
        const day = startMonth.clone()
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 >= startMonth.clone().day() && i - startMonth.clone().day() <= lenghtMonth) {
                arr[i] = day.format('D')
                day.add(1, 'day')
            }
        }
        return arr
    }, [lenghtMonth, startMonth])
    return (
        <ul className={cn('list-reset', style.row)}>
            <li className={style.column}>
                <span className={style.cellTitle}>{month} {`${year}`.slice(2, 4)}</span>
                <ul className={cn('list-reset', style.list)}>
                    {
                        place.map(item => (
                            <li className={style.item}>{item}</li>
                        ))
                    }
                </ul>
            </li>
            {
                daysArr.map((day, i) => (
                    <Cell
                        key={i}
                        id={i}
                        day={day}
                        month={shortMonth}
                        setCurrentCells={setCurrentCells}
                        currentCells={currentCells}
                        setStartElemen={setStartElement}
                    />
                ))
            }
        </ul>
    )
}