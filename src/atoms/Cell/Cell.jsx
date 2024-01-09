import cn from "classnames";
import style from "./Cell.module.scss";
import { price } from "constants";

export const Cell = ({
  id,
  day,
  month,
  currentCells,
  setCurrentCells,
  setStartElement,
}) => {
  if (!day) {
    return <li className={cn(style.cell, style.emptyCell)} />;
  } else {
    return (
      <li
        className={cn(
          style.cell,
          (day.weekend === 6 || day.weekend === 0) && style.weekend,
          currentCells.includes(id) && style.activeCell
        )}
        onClick={() =>
          setCurrentCells((old) =>
            !old.includes(id)
              ? [...old, id]
              : [...old.filter((item) => item !== id)]
          )
        }
        //onMouseDown={() => setStartElement(id)}
      >
        <span className={style.cellTitle}>
          {day.label} {month}
        </span>
        <ul className={cn("list-reset", style.list)}>
          {price.map((item) => (
            <li key={item} className={style.item}>
              {item}
            </li>
          ))}
        </ul>
      </li>
    );
  }
};
