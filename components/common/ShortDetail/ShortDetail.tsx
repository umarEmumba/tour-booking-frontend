import {
  ShortDetailContainerStyled,
  ShortDetailItemStyled,
} from "@/components/TourDetail/TourDetailStyled";
import { FC } from "react";
import LocationIcon from "../Icons/LocationIcon/LocationIcon";
import DollarIcon from "../Icons/DollarIcon/DollarIcon";
import CalendarIcon from "../Icons/CalendarIcon/CalendarIcon";

interface ShortDetailProps {
  price: string;
  location: string;
  days: string;
}
const ShortDetail: FC<ShortDetailProps> = ({ price, location, days }) => {
  return (
    <ShortDetailContainerStyled>
      <ShortDetailItemStyled>
        <LocationIcon />
        <small>{location}</small>
      </ShortDetailItemStyled>
      <ShortDetailItemStyled>
        <DollarIcon />
        <small>{price}</small>
      </ShortDetailItemStyled>
      <ShortDetailItemStyled>
        <CalendarIcon />
        <small>{days} days</small>
      </ShortDetailItemStyled>
    </ShortDetailContainerStyled>
  );
};

export default ShortDetail;
