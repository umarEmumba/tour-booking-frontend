import BookTour from "@/components/BookTour/BookTour";
import Container from "@/components/common/Container/Container";
import { Tour, getTour } from "@/utils/services";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function Tour() {
  const router = useRouter();
  const { id } = router.query;
  const { data: tour } = useQuery(`tour-${id}`, () => {
    if (!id) return;
    return getTour(id);
  });

  return <Container isSubpage>{tour && <BookTour />}</Container>;
}
