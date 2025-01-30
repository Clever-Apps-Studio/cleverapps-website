import dayjs from "dayjs";

export function getDuration(startDate: string, endDate: string) {
  // Parse the start and end dates using dayjs
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  // Calculate the difference in milliseconds
  const diffInMs = end.diff(start);

  // Create a dayjs duration object from the milliseconds difference
  const duration = dayjs.duration(diffInMs);

  // Extract the years, months, days, hours, minutes, and seconds
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  // Return the duration in a readable format
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalMonths: duration.asMonths(), // Optional: Total months as a floating point number
  };
}
