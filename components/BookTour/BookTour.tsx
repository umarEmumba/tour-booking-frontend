import React, { useMemo } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTour } from "@/utils/services";
import { GalleryImage } from "../common/Gallery/GalleryStyled";
import { BookingImageWraper, BookingWraper, Container } from "./BookTourStyled";
import BookForm from "../BookForm/BookForm";
import { useUser } from "@auth0/nextjs-auth0/client";
import { SERVER_URL } from "@/constants";
import { api } from "@/utils";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNo: yup.string().required("Phone is required"),
  paymentMethod: yup.string().required("Payment is required"),
});
export interface FormInputs {
  name: string;
  email: string;
  phoneNo: string;
  paymentMethod: string;
  tourId?: string;
  userEmail?: string;
}
const BookTour = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();
  const queryClient = useQueryClient();
  const tourId = useMemo(() => {
    if (id?.length) {
      if (Array.isArray(id)) return id[0];
      return id;
    }
  }, [id]);
  const { mutate, status } = useMutation(
    async (formData: FormInputs) => {
      const { data } = await api.post(`${SERVER_URL}bookings`, formData);
      return data.data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(`tour-booking-${tourId}`, data);
      },
    }
  );
  console.log({ status });
  const { data: tour } = useQuery(`tour-${id}`, () => {
    if (!id) return;
    return getTour(id);
  });

  const onSubmit = (data: FormInputs) => {
    data.tourId = tourId;
    if (user?.email) data.userEmail = user?.email;
    mutate(data);
  };

  return (
    <Container>
      <BookingWraper>
        <BookForm onSubmit={onSubmit} />
        {tour && (
          <BookingImageWraper>
            <GalleryImage src={tour.images[0]} alt="side image" />
          </BookingImageWraper>
        )}
      </BookingWraper>
    </Container>
  );
};
export default BookTour;
