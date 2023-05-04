import { FC } from "react";
import { DescriptionStyled } from "./DescriptionStyled";
interface DescriptionProps {
  description: string;
}
const Description: FC<DescriptionProps> = ({ description }) => {
  return <DescriptionStyled>{description}</DescriptionStyled>;
};

export default Description;
