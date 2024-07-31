export const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

export const listOfMonths = [
  {
    label: '',
    value: ''
  },
  {
    label: 'January',
    value: 1
  },
  {
    label: 'February',
    value: 2
  },
  {
    label: 'March',
    value: 3
  },
  {
    label: 'April',
    value: 4
  },
  {
    label: 'May',
    value: 5
  },
  {
    label: 'June',
    value: 6
  },
  {
    label: 'July',
    value: 7
  },
  {
    label: 'August',
    value: 8
  },
  {
    label: 'September',
    value: 9
  },
  {
    label: 'October',
    value: 10
  },
  {
    label: 'November',
    value: 11
  },
  {
    label: 'December',
    value: 12
  }
];

export const getListOfDays = (totalDays) => {
  return [...Array(totalDays).keys()].map(i => i + 1);
}

export const getDaysByMonthAndYear = (month, year = new Date().getFullYear()) => {
  const currentMonth = new Date().getMonth() + 1
  year = year === '' ? new Date().getFullYear() : year
  if (month === '') {
    let days = daysInMonth(year, currentMonth)
    return getListOfDays(days)
  }

  let days = daysInMonth(year, month)
  return getListOfDays(days)
}

export const getListOfYears = (month = undefined, day = undefined) => {
  const currentYear = new Date().getFullYear();
  let listOfYear = [''];
  for (let i = 0; i <= 120; i++) {
    listOfYear.push(currentYear - i)
  }


  if (month === 2 && day === 29) {
    const leapYears = listOfYear.filter(year => 
      isLeapYear(year)
    )
    return leapYears
  }
  return listOfYear
}

function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}