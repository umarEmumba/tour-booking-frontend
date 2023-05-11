import { SERVER_URL, localTour } from "@/constants";
import { api } from "@/utils";
import { getTour } from "@/utils/services";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useGetPageParam } from "./useGetPageParam";

export const useBookTour = () => {
  const tourId = useGetPageParam();
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: mutateTours, isLoading } = useMutation(
    async (tourToSave: localTour) => {
      const data = await api.post(`${SERVER_URL}tours`, tourToSave);
      return data.data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(`my-tour-${tourId}`, data);
      },
    }
  );
  const { data: tour } = useQuery(`tour-${tourId}`, () => {
    if (!tourId) return;
    return getTour(tourId);
  });

  const SaveTourLocally = () => {
    if (!user?.email) return;
    const tourToSave: localTour = {
      name: tour.title,
      city: tour.city,
      description: tour.listingName,
      price: tour.price,
      checkin: tour.checkin,
      checkout: tour.checkout,
      localizedCityName: tour.localizedCityName,
      listingName: tour.listingName,
      listingGuestLabel: tour.listingGuestLabel,
      facilities: tour.listingPreviewAmenityNames,
      images: tour.images,
      publicAddress: tour.publicAddress,
      id: tourId ? tourId : tour.id,
      userEmail: user.email,
      listingPreviewAmenityNames: tour.listingPreviewAmenityNames,
    };
    mutateTours(tourToSave);
  };

  return {
    tour,
    SaveTourLocally,
    isLoading,
  };
};
