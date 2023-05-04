import { FC, ReactNode } from "react";
import { PopupStyled } from "./PopupStyled";

interface PopupProps {
  children: ReactNode;
}
const Popup: FC<PopupProps> = ({ children }) => {
  return <PopupStyled>{children}</PopupStyled>;
};

export default Popup;
