import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOutsideClickAlerter } from "./useOutSideClick";
import subDays from "date-fns/subDays";
import { RangeKeyDict } from "react-date-range";
import { getMonthFromDateObj } from "@/utils";
import { filtersType } from "@/constants";

export const useDatePicker = (
  setDateRange: Dispatch<SetStateAction<filtersType>>
) => {
  const now = useRef(new Date());
  const datePickerRef = useRef(null);
  const [from, setFrom] = useState(now.current);
  const [rangePicker, setRangePicker] = useState(false);
  useOutsideClickAlerter(datePickerRef, setRangePicker);
  const [to, setTo] = useState(subDays(now.current, -5));

  const setFormattedDateRange = (startDate: Date, endDate: Date) => {
    const filteredDates = {
      start: startDate.toISOString().split("T")[0],
      end: endDate.toISOString().split("T")[0],
    };
    return filteredDates;
  };
  const handleSelect = useCallback(
    ({ selection: { startDate, endDate } }: RangeKeyDict) => {
      startDate && setFrom(getMonthFromDateObj(startDate).objectFormat);
      endDate && setTo(getMonthFromDateObj(endDate).objectFormat);
      if (startDate && endDate && endDate !== startDate) {
        setRangePicker(false);
        const filteredDates = setFormattedDateRange(startDate, endDate);
        setDateRange((prevState) => {
          return {
            ...prevState,
            minDate: filteredDates.start,
            maxDate: filteredDates.end,
          };
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const ranges = useMemo(() => {
    return [
      {
        startDate: from,
        endDate: to,
        key: "selection",
      },
    ];
  }, [from, to]);
  const selectedDateRange = `${getMonthFromDateObj(from).stringFormat} - ${
    getMonthFromDateObj(to).stringFormat
  }`;
  return {
    rangePicker,
    datePickerRef,
    ranges,
    handleSelect,
    setRangePicker,
    selectedDateRange,
  };
};
