import { HistoryType } from "./HistoryType";

export type HistoryContextType = {
  history: HistoryType[] | null;
  editableContentID: string;
  setEditableContentID: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<HistoryType[] | null>>;
};
