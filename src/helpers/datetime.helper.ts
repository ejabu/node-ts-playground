import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

const fmt = "DD-MM-YYYY"

export const getLabelBetweenDates=(startDate: string, endDate: string) => {
  const labels: string[] = []
  let currentDate = dayjs(startDate, fmt).unix()
  const maxDate = dayjs(endDate, fmt).unix()
  while (currentDate <= maxDate) {
    const date = dayjs(currentDate * 1000);
    labels.push(date.format("YYYY-MM-DD"));
    currentDate += (24 * 60 * 60 );
  }
  return labels;
}

export const calculateTimeGap=(a: string, b: string, format: string) => {
  return dayjs(b, fmt).unix() - dayjs(a, fmt).unix()

}