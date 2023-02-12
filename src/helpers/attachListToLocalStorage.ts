import { HistoryType } from "types/HistoryType";

const attachListToLocalStorage = (historyList: HistoryType[]) => {
  localStorage.setItem("history", JSON.stringify(historyList));
};
export default attachListToLocalStorage;
