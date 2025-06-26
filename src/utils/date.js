import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { DATE_FORMAT } from 'pages/common/constants';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

export { dayjs };

export const dateDifference = (from = dayjs(), to = dayjs(), unit = 'day') => dayjs(from).diff(dayjs(to), unit);

export const dateToTimeStamp = (date) => {
  const parsedDate = dayjs(date, {
    format: DATE_FORMAT.DATE_TIME_GMT
  });
  const utcDate = parsedDate.utc();
  const timeStampInMillis = utcDate.valueOf();
  return timeStampInMillis;
};

export const convertToUTC = (date) => {
  const parsedDate = dayjs(date, {
    format: DATE_FORMAT.DATE_TIME_GMT
  });
  return parsedDate.utc();
};

export const formatDate = (date, format = DATE_FORMAT.DATE_LOCAL) => {
  const parsedDate = dayjs(date, {
    format: DATE_FORMAT.DATE_TIME_GMT
  });
  const formattedDate = parsedDate.format(format);
  return formattedDate;
};

export const convertToLocalDate = (date, format = DATE_FORMAT.DATE_LOCAL) => {
  if (date) {
    const parsedDate = dayjs(date, {
      format: DATE_FORMAT.DATE_TIME_GMT
    });
    const formattedDate = parsedDate.format(format);
    return formattedDate;
  } return null;
};

export const convertToLocalDateTime = (date) => {
  if (date) {
    const utcDate = new Date(date);
    const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000); // UTC+5:30

    const istDateTimeString = istDate.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    });
    return istDateTimeString;
  } return null;
};

export const reFormattedDate = (dates = '') => {
  if (dates) {
    const startDate = dates;
    const splited = startDate?.split('-');
    const formatedStartDate = splited?.length > 0
      ? new Date(
        parseInt(splited[2], 10),
        parseInt(splited[1], 10) - 1,
        parseInt(splited[0], 10)
      ) : [];
    return formatedStartDate;
  }

  return null;
};

export const getDayTimePeriod = () => {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning';
  } if (currentHour >= 12 && currentHour < 17) {
    return 'Good Afternoon';
  }
  return 'Good Evening';
};
