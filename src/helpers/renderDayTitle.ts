import { isSameWeek, parseISO, format, isSameYear } from "date-fns";

/**
 * if current week return day title, if prev weeks return day and month, if prev years return day,month,year
 * @param day
 * @returns
 */
const renderDayTitle = (day: any) => {
  const currentDate = new Date();
  const parsedDay = parseISO(day);
  const isCurrentWeekDay = isSameWeek(currentDate, parsedDay, {
    weekStartsOn: 1,
  });
  if (isCurrentWeekDay) return format(parsedDay, "EEEE");
  else if (!isSameYear(parsedDay, currentDate))
    return format(parsedDay, "d MMMM, yyyy");
  return format(parsedDay, "d MMMM");
};

export default renderDayTitle;
