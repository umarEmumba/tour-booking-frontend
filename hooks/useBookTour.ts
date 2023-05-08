import { FormInputs, SERVER_URL, localTour } from "@/constants";
import { api } from "@/utils";
import { getBooking, getTour } from "@/utils/services";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as yup from "yup";

export const useBookTour = () => {
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

  const { mutate: mutateBooking, status } = useMutation(
    async (formData: FormInputs) => {
      if (formData.bookingId) {
        const { data } = await api.patch(
          `${SERVER_URL}bookings/${formData.bookingId}`,
          formData
        );
        return data.data;
      }
      const { data } = await api.post(`${SERVER_URL}bookings`, formData);
      return data.data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(`tour-booking-${tourId}`, data);
      },
    }
  );
  const { mutate: mutateTours, status: tourStatus } = useMutation(
    async (tourToSave: localTour) => {
      const { data } = await api.post(`${SERVER_URL}tours`, tourToSave);
      return data.data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(`my-tour-${tourId}`, data);
      },
    }
  );
  const { data: tour } = useQuery(`tour-${id}`, () => {
    if (!id) return;
    return getTour(id);
  });

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNo: yup.string().required("Phone is required"),
    paymentMethod: yup.string().required("Payment is required"),
  });
  const onSubmit = (data: FormInputs) => {
    data.tourId = tourId;
    if (user?.email) data.userEmail = user?.email;
    mutateBooking(data);
    if (!user?.email) return;
    const tourToSave: localTour = {
      name: tour.title,
      city: tour.city,
      description: tour.listingName,
      price: tour.price,
      startDate: tour.checkin,
      endDate: tour.checkout,
      facilities: tour.listingPreviewAmenityNames,
      images: tour.images,
      publicAddress: tour.publicAddress,
      id: tourId ? tourId : tour.id,
      userEmail: user.email,
      listingPreviewAmenityNames: tour.listingPreviewAmenityNames,
    };
    if (!data.bookingId) mutateTours(tourToSave);
  };

  return {
    onSubmit,
    tour,
    schema,
  };
};
