import {
  FilterContainerStyled,
  FilterItemStyled,
  FilterWraper,
  SearchIconWraper,
} from "./FiltersStyled";
import Location from "./Location/Location";
import DatePicker from "./DatePicker/DatePicker";
import PriceRange from "./PriceRange/PriceRange";
import LocationIcon from "../Icons/LocationIcon/LocationIcon";
import CalendarIcon from "../Icons/CalendarIcon/CalendarIcon";
import DollarIcon from "../Icons/DollarIcon/DollarIcon";
import { LogoImage } from "../Logo/LogoStyled";
import { useFilters } from "@/hooks/useFilters";

const Filters = () => {
  const { filterItems, setFilterItems, mutate, isLoading } = useFilters();
  return (
    <FilterContainerStyled>
      <FilterWraper>
        <FilterItemStyled>
          <LocationIcon />
          <Location locationId={filterItems.id} setLocation={setFilterItems} />
        </FilterItemStyled>
        <FilterItemStyled>
          <CalendarIcon />
          <DatePicker setDateRange={setFilterItems} />
        </FilterItemStyled>
        <FilterItemStyled noBorder>
          <DollarIcon />
          <PriceRange setPriceRange={setFilterItems} />
        </FilterItemStyled>
        <FilterItemStyled noBorder>
          <SearchIconWraper>
            {isLoading ? (
              <LogoImage
                src="/assets/images/spinner.gif"
                alt="search"
                width="30px"
                height="30px"
              />
            ) : (
              <LogoImage
                src="/assets/images/icons/search.png"
                alt="search"
                width="30px"
                height="30px"
                onClick={() => mutate()}
              />
            )}
          </SearchIconWraper>
        </FilterItemStyled>
      </FilterWraper>
    </FilterContainerStyled>
  );
};

export default Filters;
