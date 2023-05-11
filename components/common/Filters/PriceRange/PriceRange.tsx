import { filtersType } from "@/constants";
import { FilterInputContainerStyled } from "../../styled/FilterInputContainerStyled";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import SelectStyled from "../../styled/SelectStyled";
import OptionsStyled from "../../styled/OptionsStyled";

interface PriceRangeProps {
  setPriceRange: Dispatch<SetStateAction<filtersType>>;
}
const PriceRange: FC<PriceRangeProps> = ({ setPriceRange }) => {
  const [price, setPrice] = useState("50-199");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const dateRange = event.target.value;
    setPrice(dateRange);
    setPriceRange((prevState) => {
      return {
        ...prevState,
        minDate: dateRange.split("-")[0],
        maxDate: dateRange.split("-")[1],
      };
    });
  };
  return (
    <FilterInputContainerStyled>
      <h3>Price Range</h3>
      <SelectStyled value={price} onChange={handleChange}>
        <OptionsStyled value="50-199">$50-$200</OptionsStyled>
        <OptionsStyled value="200-399">$200-$400</OptionsStyled>
        <OptionsStyled value="400-499">$400-$500</OptionsStyled>
        <OptionsStyled value="500-699">$500-$700</OptionsStyled>
        <OptionsStyled value="700-999">$700-$1000</OptionsStyled>
        <OptionsStyled value="1000-">$1000 Above</OptionsStyled>
      </SelectStyled>
    </FilterInputContainerStyled>
  );
};

export default PriceRange;
