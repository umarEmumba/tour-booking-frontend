import Card from "@/components/common/Card/Card";
import Container from "@/components/common/Container/Container";
import { CardsContainer } from "@/components/common/styled/CardStyled";
import { SERVER_URL } from "@/constants";
import { api } from "@/utils";
import { Tour } from "@/utils/services";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useQuery } from "react-query";

const Tours = () => {
  const { user } = useUser();

  const { data: tours, isLoading } = useQuery(`my-tours`, async () => {
    const response = await api.get(`${SERVER_URL}tours`, {
      params: { userEmail: user?.email },
    });

    return response.data;
  });

  return (
    <Container isSubpage>
      <h2>Tour</h2>
      <CardsContainer>
        {tours?.map((tour: Tour, index: number) => (
          <Card key={`${index}-${tour.id}`} tour={tour} />
        ))}
      </CardsContainer>
    </Container>
  );
};
export default withPageAuthRequired(Tours);
