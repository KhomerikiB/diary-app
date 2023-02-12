import { v4 as uuidv4 } from "uuid";
import {
  formatISO,
  startOfWeek,
  eachDayOfInterval,
  subWeeks,
  endOfWeek,
} from "date-fns";

/**
 * @param day
 * @returns
 */
export const dayModel = (day: string) => ({
  description: "",
  day: day,
  id: uuidv4(),
  rating: null,
});
/**
 * Get prev and current week dates
 * if today is Monday it will add  [Prev Week dates,Monday];
 * if today is Tuesday it will add [Prev Week dates, Monday,Tuesday] etc...
 * @returns prev and current week days list
 */
const getCurrentAndPrevWeekDays = () => {
  const currentDate = new Date();
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const currentWeekDays = eachDayOfInterval({
    start: startOfWeekDate,
    end: currentDate,
  });
  const startOfPreviousWeek = startOfWeek(subWeeks(currentDate, 1));
  const endOfPreviousWeek = endOfWeek(subWeeks(currentDate, 1));
  const previousWeekDates = eachDayOfInterval({
    start: startOfPreviousWeek,
    end: endOfPreviousWeek,
  });
  const list = [...previousWeekDates, ...currentWeekDays].map((day, index) => {
    return dayModel(formatISO(day));
  });
  return list;
};
export default getCurrentAndPrevWeekDays;
