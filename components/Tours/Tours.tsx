import { QueryClient, dehydrate, useQuery, useQueryClient } from "react-query";
import { CardsContainer } from "../common/styled/CardStyled";
import { Tour, getTours } from "@/utils/services";
import Card from "../common/Card/Card";
import NoData from "../common/NoData/NoData";

const Tours = () => {
  const queryClient = useQueryClient();
  const {
    data: tours,
    isLoading,
    isError,
  } = useQuery("tours", getTours, {
    initialData: queryClient.getQueryData("tours"),
    // initialStale: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
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
