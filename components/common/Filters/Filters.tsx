import Image from "next/image";
import {
  FilterContainerStyled,
  FilterItemStyled,
  FilterWraper,
  SearchIconWraper,
} from "./FiltersStyled";
import Location from "./Location/Location";
import DatePicker from "./DatePicker/DatePicker";
import PriceRange from "./PriceRange/PriceRange";
import { useState } from "react";
import {
  API_BASE_URL,
  API_HOST,
  API_KEY,
  POPULAR_PLACES,
  TOURS_END_POINT,
  filtersType,
} from "@/constants";
import { useMutation, useQueryClient } from "react-query";
import { api } from "@/utils";
import LocationIcon from "../Icons/LocationIcon/LocationIcon";
import CalendarIcon from "../Icons/CalendarIcon/CalendarIcon";
import DollarIcon from "../Icons/DollarIcon/DollarIcon";

const Filters = () => {
  const [filterItems, setFilterItems] = useState<filtersType>({
    id: POPULAR_PLACES[1].id,
    minDate: "",
    maxDate: "",
    priceMin: "",
    priceMax: "",
  });
  const queryClient = useQueryClient();

  const refetchQueryMutation = useMutation(
    async () => {
      const tourApi = `${API_BASE_URL}${TOURS_END_POINT}`;
      const { data } = await api.get(tourApi, {
        params: filterItems,
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      });
      return data.data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData("tours", data);
      },
    }
  );
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
          <SearchIconWraper onClick={() => refetchQueryMutation.mutate()}>
            <Image
              src="/assets/images/icons/search.png"
              alt="search"
              width={50}
              height={20}
            />
          </SearchIconWraper>
        </FilterItemStyled>
      </FilterWraper>
    </FilterContainerStyled>
  );
};

export default Filters;
