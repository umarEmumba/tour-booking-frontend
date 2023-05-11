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

import axios from "axios";

type FetchType = [
  "get" | "post" | "delete" | "patch" | "put",
  string,
  {
    [key: string]: any;
  }
];

type ArgsType = [
  string,
  {
    [key: string]: any;
  }
];

export const api = {
  get: (...args: ArgsType) => fetchAPIData(["get", ...args]),
  post: (...args: ArgsType) => fetchAPIData(["post", ...args]),
  put: (...args: ArgsType) => fetchAPIData(["put", ...args]),
  patch: (...args: ArgsType) => fetchAPIData(["patch", ...args]),
  delete: (...args: ArgsType) => fetchAPIData(["delete", ...args]),
};

const fetchAPIData = async ([method, url, options]: FetchType) => {
  try {
    const response = await axios[method](url, { ...options });
    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTourDays = (checkin?: string, checkout?: string) => {
  if (!checkin || !checkout) return `5`;

  const checkInDate = new Date(checkin);
  const checkOutDate = new Date(checkout);

  const duration = Math.round(
    (+checkOutDate - +checkInDate) / (1000 * 60 * 60 * 24)
  );

  return duration;
};
