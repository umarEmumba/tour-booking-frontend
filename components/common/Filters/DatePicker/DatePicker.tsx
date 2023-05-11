import { Dispatch, FC, SetStateAction } from "react";
import { FilterInputContainerStyled } from "../../styled/FilterInputContainerStyled";
import { InputStyled } from "../FiltersStyled";
import { DateRange } from "react-date-range";
import { DatePickerWraper } from "./DatePickerStyled";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { filtersType } from "@/constants";
import { useDatePicker } from "@/hooks/useDatePicker";

interface DatePickerProps {
  setDateRange: Dispatch<SetStateAction<filtersType>>;
}
const DatePicker: FC<DatePickerProps> = ({ setDateRange }) => {
  const {
    rangePicker,
    datePickerRef,
    ranges,
    handleSelect,
    setRangePicker,
    selectedDateRange,
  } = useDatePicker(setDateRange);
  return (
    <FilterInputContainerStyled ref={datePickerRef}>
      <h3>Choose Date</h3>
      {rangePicker && (
        <DatePickerWraper>
          <DateRange
            dateDisplayFormat={"YYYY.MM.dd"}
            moveRangeOnFirstSelection={false}
            ranges={ranges}
            onChange={handleSelect}
            showDateDisplay={false}
          />
        </DatePickerWraper>
      )}

      <InputStyled
        type="text"
        readOnly
        onClick={() => setRangePicker(true)}
        placeholder="Where you want to go?"
        value={selectedDateRange}
      />
    </FilterInputContainerStyled>
  );
};

export default DatePicker;
