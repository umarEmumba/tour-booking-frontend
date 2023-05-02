import { QueryClient, dehydrate, useQuery, useQueryClient } from "react-query";
import { CardsContainer } from "../common/styled/CardStyled";
import { Tour, getTours } from "@/utils/services";
import Card from "../common/Card/Card";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("tours", getTours);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

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
  return (
    <>
      {tours?.length && (
        <>
          <h2>Top Destinations At {`"${tours[0].localizedCityName}"`}</h2>
        </>
      )}
      <CardsContainer>
        {tours?.map((tour: Tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </CardsContainer>
    </>
  );
};

export default Tours;
