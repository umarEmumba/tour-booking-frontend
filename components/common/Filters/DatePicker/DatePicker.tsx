import { useCallback, useMemo, useRef, useState } from "react";
import { FilterInputContainerStyled } from "../../styled/FilterInputContainerStyled";
import { InputStyled } from "../FiltersStyled";
import subDays from "date-fns/subDays";
import { DateRange, DateRangePicker, RangeKeyDict } from "react-date-range";
import { getMonthFromDateObj } from "@/utils";
import { useOutsideClickAlerter } from "@/hooks/useOutSideClick";
import { DatePickerWraper } from "./DatePickerStyled";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
type selectPropsType = {
  selection: { startDate: Date; endDate: Date };
};

const DatePicker = () => {

    const now = useRef(new Date());
  const datePickerRef = useRef(null);

    const [from, setFrom] = useState(now.current);
    const [rangePicker, setRangePicker] = useState(false);
  useOutsideClickAlerter(datePickerRef, setRangePicker);
  const [to, setTo] = useState(subDays(now.current, -5));
    const handleSelect = useCallback(
        ({ selection: { startDate, endDate } }: RangeKeyDict) => {
          startDate && setFrom(getMonthFromDateObj(startDate).objectFormat);
          endDate && setTo(getMonthFromDateObj(endDate).objectFormat);
          if (endDate !== startDate) {
            setRangePicker(false);
            // props.setFormattedDateRange(startDate, endDate);
          }
        },
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
    return (
        <FilterInputContainerStyled ref={datePickerRef}>
            <h3>
                Choose Date
            </h3>
            {
              rangePicker &&
              <DatePickerWraper>
                <DateRange
                  dateDisplayFormat={"YYYY.MM.dd"}
                  moveRangeOnFirstSelection={false}
                  ranges={ranges}
                  onChange={handleSelect}
                  showDateDisplay={false}
                  // {...props}
                />
              </DatePickerWraper>
            }
          
            <InputStyled type="text" onClick={() => setRangePicker(true)} placeholder="Where you want to go?" />
        </FilterInputContainerStyled>
     );
}
 
export default DatePicker;