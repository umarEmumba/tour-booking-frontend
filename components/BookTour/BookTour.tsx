import { GalleryImage } from "../common/Gallery/GalleryStyled";
import { BookingImageWraper, BookingWraper, Container } from "./BookTourStyled";
import BookForm from "../BookForm/BookForm";
import { useBookTour } from "@/hooks/useBookTour";

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
