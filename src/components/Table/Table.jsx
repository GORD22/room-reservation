import { TableHeader } from "molecules/TableHeader/TableHeader";
import style from "./Table.module.scss";
import { Row } from "molecules/Row/Row";
import moment from "moment";
import { currentMonth } from "constants";
import { arrayRange } from "functions";
import { useEffect, useState, useMemo } from "react";

export const Table = () => {
  moment.updateLocale("en", { week: { dow: 1 } });
  const time = moment().clone();
  const currentMonth = time.clone().month();

  const [currentCells, setCurrentCells] = useState([]);
  const [startElement, setStartElement] = useState();

  const startSelection = (id) => {
    setStartElement(id);
  };

  const updateSelection = (id) => {
    if (startElement === null) {
      return;
    }

    const iMin = Math.min(startElement, id);
    const iMax = Math.max(startElement, id);
    setCurrentCells((old) => [...old]);
  };

  const stopSelection = () => {
    setStartElement(null);
  };

  const monthRange = useMemo(() => {
    const arr = [];
    const currentMonth = time.clone();
    currentMonth.add(-6, "months");
    console.log(currentMonth);
    for (let i = -6; i <= 18; i++) {
      arr.push(currentMonth.clone());
      currentMonth.add(1, "months");
    }
    return arr;
  }, []);
  console.log(monthRange);

  return (
    <div className={style.table}>
      <div className={style.container}>
        <TableHeader year={time.year()} />
        <div className={style.rowsWrapper}>
          {monthRange.map((month) => (
            <Row
              key={`${month.clone().month()} ${month.clone().year()}`}
              time={month}
              setCurrentCells={setCurrentCells}
              currentCells={currentCells}
              startElement={startElement}
              setStartElement={setStartElement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
