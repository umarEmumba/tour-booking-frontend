import { menuItem } from "@/constants";
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FC } from "react";

interface NavigationItemPropsType {
  item: menuItem;
}
const NavigationItem: FC<NavigationItemPropsType> = ({ item }) => {
  const { user } = useUser();
  return <div>{<a href={item.url}>{item.title}</a>}</div>;
};
export default NavigationItem;
