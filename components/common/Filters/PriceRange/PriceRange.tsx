import { FilterInputContainerStyled } from "../../styled/FilterInputContainerStyled";

const PriceRange = () => {
    return (  <FilterInputContainerStyled>
        <h3>
            Price Range
        </h3>
        <select >
            <option value="50-199">$50-$200</option>
            <option value="200-399">$200-$400</option>
            <option value="400-499">$400-$500</option>
            <option value="500-699">$500-$700</option>
            <option value="700-999">$700-$1000</option>
            <option value="1000-max">$1000 Above</option>
        </select>
    </FilterInputContainerStyled> );
}
 
export default PriceRange;