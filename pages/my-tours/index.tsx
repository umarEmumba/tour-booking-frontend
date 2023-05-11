import Card from "@/components/common/Card/Card";
import Container from "@/components/common/Container/Container";
import Loader from "@/components/common/Loader/Loader";
import NoData from "@/components/common/NoData/NoData";
import { CardsContainer } from "@/components/common/styled/CardStyled";
import { Tour, getMyTours } from "@/utils/services";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { QueryClient, dehydrate, useQuery } from "react-query";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const queryClient = new QueryClient();
    if (session) {
      await queryClient.prefetchQuery(
        `my-tours`,
        async () => await getMyTours(session.user.email),
        {
          initialData: null,
        }
      );
    }

    const dehydratedState = dehydrate(queryClient);
    return {
      props: {
        dehydratedState,
      },
    };
  },
});

const Tours = () => {
  const { user } = useUser();

  const { data: tours, isLoading } = useQuery(
    `my-tours`,
    async () => await getMyTours(user?.email)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!tours?.length) {
    return <NoData />;
  }

  return (
    <Container isSubpage>
      <h2>My Tours</h2>
      {!tours?.length ? (
        <NoData />
      ) : (
        <CardsContainer>
          {tours?.map((tour: Tour, index: number) => (
            <Card key={`${index}-${tour.id}`} tour={tour} />
          ))}
        </CardsContainer>
      )}
    </Container>
  );
};
export default Tours;
