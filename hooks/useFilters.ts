import { POPULAR_PLACES, filtersType } from "@/constants";
import { getFilteredTours } from "@/utils/services";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useFilters = () => {
  const [filterItems, setFilterItems] = useState<filtersType>({
    id: POPULAR_PLACES[1].id,
    minDate: "",
    maxDate: "",
    priceMin: "",
    priceMax: "",
  });
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    async () => await getFilteredTours(filterItems),
    {
      onSuccess: (data) => {
        queryClient.setQueryData("tours", data);
      },
    }
  );
  return {
    filterItems,
    setFilterItems,
    mutate,
    isLoading,
  };
};
