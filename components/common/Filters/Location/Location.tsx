import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { FilterInputContainerStyled } from "../../styled/FilterInputContainerStyled";
import { POPULAR_PLACES, filtersType } from "@/constants";
import SelectStyled from "../../styled/SelectStyled";
import OptionsStyled from "../../styled/OptionsStyled";
interface LocationProps {
  locationId: string;
  setLocation: Dispatch<SetStateAction<filtersType>>;
}
const Location: FC<LocationProps> = ({ locationId, setLocation }) => {
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocation((prevState: filtersType) => {
      return { ...prevState, id: event.target.value };
    });
  };
  return (
    <FilterInputContainerStyled>
      <h3>Location</h3>
      <SelectStyled value={locationId} onChange={onSelect}>
        {POPULAR_PLACES.map((option) => (
          <OptionsStyled key={option.id} value={option.id}>
            {option.location_name}
          </OptionsStyled>
        ))}
      </SelectStyled>
    </FilterInputContainerStyled>
  );
};

export default Location;
