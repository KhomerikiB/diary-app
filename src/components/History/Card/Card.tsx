import { useContext } from "react";
import HistoryContext from "context/HistoryContext";
import { HistoryContextType } from "types/HistoryContextType";
import "./Card.scss";
import { CircleButton } from "components/UI/CircleButton";
import renderDayTitle from "helpers/renderDayTitle";
import clsx from "clsx";

type HistoryCardType = {
  description?: string;
  day: string;
  id?: string;
  rating?: number;
  disabled?: boolean;
};
const Card = ({
  day,
  description,
  id,
  rating,
  disabled = false,
}: HistoryCardType) => {
  const { setEditableContentID, editableContentID } = useContext(
    HistoryContext
  ) as HistoryContextType;
  return (
    <div
      className={clsx(
        "card",
        editableContentID === id && "card--active",
        disabled && "disabled"
      )}
    >
      <h3
        className="card__title uppercase"
        onClick={id ? () => setEditableContentID(id) : undefined}
      >
        {!disabled ? renderDayTitle(day) : day}
      </h3>
      <p className="card__description">{description}</p>
      {!!rating && (
        <CircleButton size="small" disabled={true} isActive>
          {rating}
        </CircleButton>
      )}
    </div>
  );
};
export default Card;
