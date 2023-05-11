import { POPULAR_PLACES } from "@/constants";
import {
  PopularHeadingStyled,
  PopularSearchItemStyled,
  PopularSearhesWraper,
} from "./PopularSearchesStyled";

const PopularSearches = () => {
  return (
    <>
      <PopularHeadingStyled>Popular Search</PopularHeadingStyled>
      <PopularSearhesWraper>
        {POPULAR_PLACES.map((place) => (
          <PopularSearchItemStyled key={place.id}>
            {place.location_name}
          </PopularSearchItemStyled>
        ))}
      </PopularSearhesWraper>
    </>
  );
};

export default PopularSearches;
