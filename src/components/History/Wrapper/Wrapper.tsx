import { Card } from "components/History/Card";
import { useContext } from "react";
import HistoryContext from "context/HistoryContext";
import "./HistoryWrapper.scss";
import { HistoryContextType } from "types/HistoryContextType";
import { useHorizontalScroll } from "hooks/useHorizontalScroll";
const HistoryWrapper = () => {
  const { history } = useContext(HistoryContext) as HistoryContextType;
  const scrollRef = useHorizontalScroll();
  return (
    <div className="history-wrapper" ref={scrollRef}>
      <div className="history-inner">
        {history?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            day={item.day}
            description={item.description}
            rating={item.rating || 0}
          />
        ))}
        <Card disabled day="áŽááá" />
      </div>
    </div>
  );
};

export default HistoryWrapper;
