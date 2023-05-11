import { QueryClient, dehydrate, useQuery, useQueryClient } from "react-query";
import { CardsContainer } from "../common/styled/CardStyled";
import { Tour, getTours } from "@/utils/services";
import Card from "../common/Card/Card";
import NoData from "../common/NoData/NoData";
import Loader from "../common/Loader/Loader";

const Tours = () => {
  const queryClient = useQueryClient();
  const { data: tours, isLoading } = useQuery("tours", getTours, {
    initialData: queryClient.getQueryData("tours"),
    // initialStale: true,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (!tours?.length) {
    return <NoData />;
  }
  return (
    <>
      <h2>Top Destinations At {`"${tours[0].localizedCityName}"`}</h2>
      <CardsContainer>
        {tours?.map((tour: Tour, index) => (
          <Card key={`${index}-${tour.id}`} tour={tour} />
        ))}
      </CardsContainer>
    </>
  );
};

export default Tours;
