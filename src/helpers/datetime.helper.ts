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

export const dateUTCUnix = () => {
  const nice = "2023-07-25T14:30:00Z"
  const datx = new Date(nice);
  const dat2 = datx.toISOString().slice(0, 10)
  const dat23 = new Date(dat2);
  console.log('dat2 =>\n', dat23.getTime());
  console.log('datx =>\n', datx.getTime());
  console.log('getUTCMonth =>\n', datx.toISOString().slice(0, 10));
}
