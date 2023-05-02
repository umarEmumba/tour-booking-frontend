import { Tour, saveTour } from "@/utils/services";
import { CardButton, CardContainer, CardDescription, CardImage, CardTitle } from "../styled/CardStyled";
import { DefaultImage } from "@/constants";
import { FC } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import Link from "next/link";

interface CardProps {
    tour : Tour;
  }
  const Card: FC<CardProps> = ({ tour }) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const handleViewDetails = (tour : Tour) => {
        queryClient.setQueryData(`tour-${tour.id}`, tour);
        saveTour(tour);
        router.push(`/tour/${tour.id}`);
    }
    return (
      <CardContainer>
        <CardImage src={tour?.images[0] || DefaultImage} alt={tour.publicAddress} />
        <CardTitle>{tour.title }</CardTitle>
        <CardDescription>{tour.listingName}</CardDescription>
        <CardButton onClick={()=>handleViewDetails(tour)}>View Details</CardButton>
      </CardContainer>
    );
  };

  export default Card;
