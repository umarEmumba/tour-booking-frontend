
export const getMonthFromDateObj = (date: Date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const dayMonthFormat = {
      stringFormat: `${date.getDate()} ${monthNames[date.getMonth()]}`,
      objectFormat: date,
    };
  
    return dayMonthFormat;
  };