import { useEffect, useState } from "react";
import { format, formatISO, parseISO, setDefaultOptions } from "date-fns";
import { ka } from "date-fns/locale";
import { EditableCard } from "components/EditableCard";
import { Layout } from "components/Layout";
import { Wrapper as HistoryWrapper } from "components/History/Wrapper";
import HistoryContext from "context/HistoryContext";
import { HistoryType } from "types/HistoryType";
import getCurrentAndPrevWeekDays, {
  dayModel,
} from "helpers/getCurrentAndPrevWeekDays";
import attachListToLocalStorage from "helpers/attachListToLocalStorage";
import { MainTitle } from "components/Typography/MainTitle";

setDefaultOptions({ locale: ka });

function App() {
  const [history, setHistory] = useState<HistoryType[] | null>(null);
  const [editableContentID, setEditableContentID] = useState<string>("");
  useEffect(() => {
    /**
     * if user visits website first time get current and previous week days
     * else select history from localStorage. if today does not exist add
     * */
    const localHistory = localStorage.getItem("history");
    const list = localHistory
      ? JSON.parse(localHistory)
      : getCurrentAndPrevWeekDays();
    if (localHistory) {
      const formatType = "yyyy MM dd";
      const today = format(new Date(), formatType);
      const historyContainsCurrentDay = list.find(
        (item: HistoryType) => format(parseISO(item.day), formatType) === today
      );
      if (!historyContainsCurrentDay)
        list.push(dayModel(formatISO(new Date())));
      setHistory(list);
    } else setHistory(list);
    //set last day ID for Editable Card
    setEditableContentID(list[list.length - 1].id);
  }, []);
  useEffect(() => {
    const setHistoryToLocalStorage = () => {
      if (history) attachListToLocalStorage(history);
    };
    // set current updates to localstorage before tab close
    window.addEventListener("beforeunload", setHistoryToLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", setHistoryToLocalStorage);
    };
  }, [history]);
  return (
    <HistoryContext.Provider
      value={{
        history,
        editableContentID,
        setEditableContentID,
        setHistory,
      }}
    >
      <Layout>
        <MainTitle>დღიური</MainTitle>
        <EditableCard />
        <HistoryWrapper />
      </Layout>
    </HistoryContext.Provider>
  );
}

export default App;
