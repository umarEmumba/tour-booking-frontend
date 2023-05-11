import Container from "../Container/Container";
import { LoaderStyled, LoaderWraper } from "./LoaderStyled";

const Loader = () => {
  return (
    <Container isSubpage>
      <LoaderWraper>
        <LoaderStyled />
      </LoaderWraper>
    </Container>
  );
};

export default Loader;
