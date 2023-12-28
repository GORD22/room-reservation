import { TableHeader } from 'molecules/TableHeader/TableHeader'
import style from './Table.module.scss'
import { Row } from 'molecules/Row/Row'
import moment from 'moment'
import { currentMonth } from 'constants'
import { arrayRange } from 'functions'
import { useEffect, useState } from 'react'

export const Table = () => {
    moment.updateLocale('en', { week: { dow: 1 } })
    const time = moment()
    const range = arrayRange(-6, 18, 1)

    const [currentCells, setCurrentCells] = useState([])
    const [startElement, setStartElement] = useState()

    const startSelection = (id) => {
        setStartElement(id)

    }

    const updateSelection = (id) => {
        if (startElement === null) {
            return
        }

        const iMin = Math.min(startElement, id)
        const iMax = Math.max(startElement, id)
        setCurrentCells(old => ([...old, ]))
    }

    const stopSelection = () => {
        setStartElement(null)
    }

    // const monthRange = useMemo(() => {
        // const arr = []
            // const currentMonth = time.clone().month()

        // for (let i = 0; i < arr.length; i++) {
            // if (i + 1 >= startMonth.clone().day() && i - startMonth.clone().day() <= lenghtMonth) {
                // arr[i] = day.format('D')
                // day.add(1, 'day')
            // }
        // }
        // return arr
    // }, [])
    //console.log(time.startOf('month').format('DD'))
    //console.log(time)

    return (
        <div className={style.table}>
            <div className={style.container}>
                <TableHeader year={time.year()} />
                <div className={style.rowsWrapper}>
                    <Row
                        key={`${currentMonth[time.month()]} ${time.year()}`}
                        time={time}
                        setCurrentCells={setCurrentCells}
                        currentCells={currentCells}
                        startElement={startElement}
                        setStartElement={setStartElement}
                    />
                </div>
            </div>
        </div>
    )
}