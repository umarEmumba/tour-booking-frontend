import { Tour } from "@/utils/services";
import { FC } from "react";
import { HeadingStyled } from "../common/styled/HeadingStyled";
import Gallery from "../common/Gallery/Gallery";
import Description from "../common/Description/Description";
import { demoDescription } from "@/constants/mockData";
import { ResponsiveTable } from "../common/Table/Table";
import { useRouter } from "next/router";
import { ActionButtonContainer } from "../common/Card/Card";
import { CardButton } from "../common/styled/CardStyled";
import ShortDetail from "../common/ShortDetail/ShortDetail";
import { getTourDays } from "@/utils";

interface TourDetailProps {
  tour: Tour;
}
const TourDetail: FC<TourDetailProps> = ({ tour }) => {
  const router = useRouter();
  return (
    <>
      <HeadingStyled>{tour.title}</HeadingStyled>
      <ShortDetail
        location={tour.localizedCityName}
        days={`${getTourDays(tour.checkin, tour.checkout)}`}
        price={tour.price}
      />
      <Gallery images={tour.images} />
      <Description description={`${tour.listingName} ${demoDescription}`} />
      <HeadingStyled>{`What's Included`}</HeadingStyled>
      <ResponsiveTable tour={tour} />
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
