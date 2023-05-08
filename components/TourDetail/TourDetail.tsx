import { Tour } from "@/utils/services";
import { FC } from "react";
import { HeadingStyled } from "../common/styled/HeadingStyled";
import LocationIcon from "../common/Icons/LocationIcon/LocationIcon";
import {
  ShortDetailContainerStyled,
  ShortDetailItemStyled,
} from "./TourDetailStyled";
import DollarIcon from "../common/Icons/DollarIcon/DollarIcon";
import CalendarIcon from "../common/Icons/CalendarIcon/CalendarIcon";
import Gallery from "../common/Gallery/Gallery";
import Description from "../common/Description/Description";
import { demoDescription } from "@/constants/mockData";
import { ResponsiveTable } from "../common/Table/Table";
import { useRouter } from "next/router";
import { ActionButtonContainer } from "../common/Card/Card";
import { CardButton } from "../common/styled/CardStyled";

interface TourDetailProps {
  tour: Tour;
}
const TourDetail: FC<TourDetailProps> = ({ tour }) => {
  const router = useRouter();
  return (
    <>
      <HeadingStyled>{tour.title}</HeadingStyled>
      <ShortDetailContainerStyled>
        <ShortDetailItemStyled>
          <LocationIcon />
          <small>{tour.localizedCityName}</small>
        </ShortDetailItemStyled>
        <ShortDetailItemStyled>
          <DollarIcon />
          <small>{tour.price}</small>
        </ShortDetailItemStyled>
        <ShortDetailItemStyled>
          <CalendarIcon />
          <small>{tour.checkout}</small>
        </ShortDetailItemStyled>
      </ShortDetailContainerStyled>
      <Gallery images={tour.images} />
      <Description description={`${tour.listingName} ${demoDescription}`} />
      <HeadingStyled>{`What's Included`}</HeadingStyled>
      <ResponsiveTable tour={tour} />
      <HeadingStyled>{`Itinerary Schedule`}</HeadingStyled>
      <ActionButtonContainer>
        <CardButton
          visible
          onClick={() => router.push(`/book-tour/${tour.id}`)}
        >
          Book Tour
        </CardButton>
      </ActionButtonContainer>
    </>
  );
};

export default TourDetail;
