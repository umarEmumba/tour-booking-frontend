import BookTour from "@/components/BookTour/BookTour";
import Container from "@/components/common/Container/Container";
import { getBooking } from "@/utils/services";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { QueryClient, dehydrate } from "react-query";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const id = ctx.params?.id;
    const queryClient = new QueryClient();
    if (id && session && !Array.isArray(id)) {
      await queryClient.prefetchQuery(
        `booking-${id}`,
        async () => await getBooking(session.user.email, id),
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

const Tour = () => {
  return <Container isSubpage>{<BookTour />}</Container>;
};
export default Tour;
