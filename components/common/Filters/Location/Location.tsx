import { FilterInputContainerStyled } from "../../styled/FilterInputContainerStyled";
import { InputStyled } from "../FiltersStyled";

const Location = () => {
    return (
        <FilterInputContainerStyled>
            <h3>
                Location
            </h3>
            <InputStyled type="text" placeholder="Where you want to go?" />
        </FilterInputContainerStyled>
     );
}
 
export default Location;