import React from "react";
import { render, screen } from "@testing-library/react";
import EditableCard from "./EditableCard";
import HistoryContext from "context/HistoryContext";
import { dayModel } from "helpers/getCurrentAndPrevWeekDays";
import {
  formatISO,
  setDefaultOptions,
  startOfWeek,
  startOfYear,
} from "date-fns";
import { ka } from "date-fns/locale";
setDefaultOptions({ locale: ka });

describe("Editable Card", () => {
  const currentDate = new Date();
  const getMondayOfThisWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const mockData = [dayModel(formatISO(getMondayOfThisWeek))];
  const setHistory = jest.fn();
  const setEditableContentID = jest.fn();
  test("should be rendered in DOM", () => {
    render(
      <HistoryContext.Provider
        value={{
          history: mockData,
          editableContentID: mockData[0].id,
          setHistory,
          setEditableContentID,
        }}
      >
        <EditableCard />
      </HistoryContext.Provider>
    );
    const editableCard = screen.getByTestId("editable");
    expect(editableCard).toBeInTheDocument();
  });
  test("passing current week date should render only title", () => {
    render(
      <HistoryContext.Provider
        value={{
          history: mockData,
          editableContentID: mockData[0].id,
          setHistory,
          setEditableContentID,
        }}
      >
        <EditableCard />
      </HistoryContext.Provider>
    );
    const editableCardTitle = screen.getByTestId("editable__title");
    expect(editableCardTitle).toBeInTheDocument();
    expect(editableCardTitle).toHaveTextContent("ორშაბათი");
  });
  test("passing prev weeks date of the current year should render DAY MONTH", () => {
    const firstJanuary = startOfYear(new Date());
    const mockData = [dayModel(formatISO(firstJanuary))];
    render(
      <HistoryContext.Provider
        value={{
          history: mockData,
          editableContentID: mockData[0].id,
          setHistory,
          setEditableContentID,
        }}
      >
        <EditableCard />
      </HistoryContext.Provider>
    );
    const editableCardTitle = screen.getByTestId("editable__title");
    expect(editableCardTitle).toBeInTheDocument();
    expect(editableCardTitle).toHaveTextContent("1 იანვარი");
  });
  test("passing prev years date should render DAY MONTH, YEAR", () => {
    const date = new Date("2019-05-17T00:00:00.007Z");

    const mockData = [dayModel(formatISO(date))];
    render(
      <HistoryContext.Provider
        value={{
          history: mockData,
          editableContentID: mockData[0].id,
          setHistory,
          setEditableContentID,
        }}
      >
        <EditableCard />
      </HistoryContext.Provider>
    );
    const editableCardTitle = screen.getByTestId("editable__title");
    expect(editableCardTitle).toBeInTheDocument();
    expect(editableCardTitle).toHaveTextContent("17 მაისი, 2019");
  });
});
