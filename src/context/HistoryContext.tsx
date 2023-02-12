import { createContext } from "react";
import { HistoryContextType } from "types/HistoryContextType";

const HistoryContext = createContext<HistoryContextType | null>(null);
export default HistoryContext;
