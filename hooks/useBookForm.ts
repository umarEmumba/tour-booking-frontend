import { FormInputs, SERVER_URL } from "@/constants";
import { api } from "@/utils";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useGetPageParam } from "./useGetPageParam";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import * as yup from "yup";
import { Booking, getBooking } from "@/utils/services";
type useBookFormType = (data: FormInputs) => void;
export const useBookForm = (saveTour: useBookFormType) => {
  const tourId = useGetPageParam();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { user } = useUser();
  const { data: booking } = useQuery<Booking | null>(`booking-${tourId}`, () =>
    getBooking(user?.email, tourId)
  );
  const onFormSubmit = (data: FormInputs) => {
    data.bookingId = booking?._id;
    data.tourId = tourId;
    if (user?.email) data.userEmail = user?.email;
    mutateBooking(data);
  };
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNo: yup.string().required("Phone is required"),
    paymentMethod: yup.string().required("Payment is required"),
  });

  const { mutate: mutateBooking, isLoading } = useMutation(
    async (formData: FormInputs) => {
      if (formData.bookingId) {
        const data = await api.patch(
          `${SERVER_URL}bookings/${formData.bookingId}`,
          formData
        );
        return data;
      }
      const data = await api.post(`${SERVER_URL}bookings`, formData);
      if (data) saveTour(formData);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(`tour-booking-${tourId}`, data);
        router.push("/my-tours");
      },
    }
  );
  return {
    onFormSubmit,
    isLoading,
    booking,
  };
};
