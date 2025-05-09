export const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

export const listOfMonths = [
  {
    label: '',
    value: '',
  },
  {
    label: 'January',
    value: 1,
  },
  {
    label: 'February',
    value: 2,
  },
  {
    label: 'March',
    value: 3,
  },
  {
    label: 'April',
    value: 4,
  },
  {
    label: 'May',
    value: 5,
  },
  {
    label: 'June',
    value: 6,
  },
  {
    label: 'July',
    value: 7,
  },
  {
    label: 'August',
    value: 8,
  },
  {
    label: 'September',
    value: 9,
  },
  {
    label: 'October',
    value: 10,
  },
  {
    label: 'November',
    value: 11,
  },
  {
    label: 'December',
    value: 12,
  },
];

export const getListOfDays = (totalDays: number) => {
  return [...Array(totalDays).keys()].map((i) => i + 1);
};

export const getDaysByMonthAndYear = (month: number, year = new Date().getFullYear()) => {
  const currentMonth = new Date().getMonth() + 1;
  year = year === null ? new Date().getFullYear() : year;
  if (month === 0) {
    let days = daysInMonth(year, currentMonth);
    return getListOfDays(days);
  }

  let days = daysInMonth(year, month);
  return getListOfDays(days);
};

export const getListOfYears = (
  month: number | undefined = undefined,
  day: number | undefined = undefined
) => {
  const currentYear = new Date().getFullYear();
  let listOfYear: number[] = [];
  for (let i = 0; i <= 120; i++) {
    listOfYear.push(currentYear - i);
  }

  if (month === 2 && day === 29) {
    const leapYears = listOfYear.filter((year) => isLeapYear(year));
    return leapYears;
  }
  return listOfYear;
};

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
