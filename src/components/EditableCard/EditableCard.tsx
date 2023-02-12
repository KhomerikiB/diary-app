import { useContext } from "react";
import HistoryContext from "context/HistoryContext";
import { HistoryContextType } from "types/HistoryContextType";
import "./EditableCard.scss";
import { CircleButton } from "components/UI/CircleButton";
import { Textarea } from "components/UI/Textarea";
import renderDayTitle from "helpers/renderDayTitle";
import { GradientBG } from "components/GradientBG";

const ratingList = [...Array(5)].map((_, index) => index + 1);

const EditableCard = () => {
  const { editableContentID, history, setHistory } = useContext(
    HistoryContext
  ) as HistoryContextType;
  const inputHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setHistory((prev) => {
      if (prev === null) return prev;
      return prev.map((item: any) => {
        return {
          ...item,
          description: item.id === editableContentID ? value : item.description,
        };
      });
    });
  };
  const ratingHandler = (num: number) => {
    setHistory((prev) => {
      if (prev === null) return prev;
      return prev?.map((item: any) => {
        return {
          ...item,
          rating: item.id === editableContentID ? num : item.rating,
        };
      });
    });
  };
  const currentCardItem = history?.find(
    (item) => item.id === editableContentID
  );
  return (
    <div>
      <div className="editable" data-testid="editable">
        {currentCardItem ? (
          <>
            <GradientBG
              day={currentCardItem.day}
              rating={currentCardItem.rating}
            />

            <p
              className="uppercase editable__title"
              data-testid="editable__title"
            >
              {renderDayTitle(currentCardItem.day)}
            </p>
            <Textarea
              value={currentCardItem.description}
              onChange={inputHandler}
              placeholder="აღწერა"
            />
            <div className="flex-center rating">
              {ratingList.map((num) => (
                <CircleButton
                  key={num}
                  onClick={() => ratingHandler(num)}
                  isActive={currentCardItem.rating === num}
                >
                  {num}
                </CircleButton>
              ))}
            </div>
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default EditableCard;
