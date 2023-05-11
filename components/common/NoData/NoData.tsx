import Container from "../Container/Container";
import { GalleryImage } from "../Gallery/GalleryStyled";
import { CardContainer, CardTitle } from "../styled/CardStyled";

const NoData = () => {
  return (
    <Container isSubpage>
      <CardContainer>
        <CardTitle>No Tour Found!!</CardTitle>
        <GalleryImage src="assets/images/empty.webp" />
      </CardContainer>
    </Container>
  );
};

export default NoData;
