import { menuItem } from "@/constants";
import { FC } from "react";
import { NavigationItemStyled } from "../NavigationStyled";

interface NavigationItemPropsType {
  item: menuItem;
}
const NavigationItem: FC<NavigationItemPropsType> = ({ item }) => {
  return (
    <NavigationItemStyled href={item.url}>{item.title}</NavigationItemStyled>
  );
};
export default NavigationItem;
