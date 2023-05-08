import { Tour, saveTour } from "@/utils/services";
import {
  CardButton,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
} from "../styled/CardStyled";
import { DefaultImage, SERVER_URL } from "@/constants";
import { FC } from "react";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { api } from "@/utils";

interface CardProps {
  tour: Tour;
}
export const ActionButtonContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  bottom: 2px;
  color: #fff;
  font-size: 1rem;
  flex: display;
  column-gap: 5px;
`;

const Card: FC<CardProps> = ({ tour }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const handleViewDetails = (tour: Tour) => {
    queryClient.setQueryData(`tour-${tour.id}`, tour);
    saveTour(tour);
    router.push(`/tour/${tour.id}`);
  };
  const { mutate, status } = useMutation(
    async (id: string) => {
      await api.delete(`${SERVER_URL}tours/${id}`, {});
      return id;
    },
    {
      onSuccess: (id) => {
        const previousTours: Tour[] | undefined =
          queryClient.getQueryData("my-tours");
        console.log({ previousTours });

        if (previousTours)
          queryClient.setQueryData(
            "my-tours",
            previousTours.filter((localTour) => localTour._id === id)
          );
      },
    }
  );
  return (
    <CardContainer>
      <CardImage
        src={tour?.images[0] || DefaultImage}
        alt={tour.publicAddress}
      />
      <CardTitle>{tour.title}</CardTitle>
      <CardDescription>{tour.listingName}</CardDescription>
      <ActionButtonContainer>
        <CardButton onClick={() => handleViewDetails(tour)}>
          View Details
        </CardButton>
        {tour._id && (
          <CardButton
            onClick={() => {
              tour._id && mutate(tour._id);
            }}
          >
            Delete
          </CardButton>
        )}
      </ActionButtonContainer>
    </CardContainer>
  );
};

export default Card;
