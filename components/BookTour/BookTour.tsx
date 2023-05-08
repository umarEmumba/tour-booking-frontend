import React from "react";
import { GalleryImage } from "../common/Gallery/GalleryStyled";
import { BookingImageWraper, BookingWraper, Container } from "./BookTourStyled";
import BookForm from "../BookForm/BookForm";
import { useBookTour } from "@/hooks/useBookTour";
import { QueryClient } from "react-query";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

// export const getServerSideProps = withPageAuthRequired({
//   //returnTo: '/foo',
//   async getServerSideProps(ctx) {
//     const session = getSession(ctx.req, ctx.res);
//     //check the console of backend, you will get tokens here
//     console.log({ session });
//     return {
//       props: {
//         customProp: "bar",
//       },
//     };
//   },
// });

const BookTour = () => {
  const { onSubmit, tour } = useBookTour();
  return (
    <Container>
      <BookingWraper>
        <BookForm onSubmit={onSubmit} />
        {tour && (
          <BookingImageWraper>
            <GalleryImage src={tour.images[0]} alt="side image" />
          </BookingImageWraper>
        )}
      </BookingWraper>
    </Container>
  );
};
export default BookTour;
