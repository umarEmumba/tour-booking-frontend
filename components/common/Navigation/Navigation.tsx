import { menu } from "@/constants";
import { NavigationContainer } from "./NavigationStyled";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useMemo } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navigation = () => {
  const { user } = useUser();
  const menuItems = useMemo(
    () =>
      menu.filter(
        ({ title }) =>
          (title !== "Login" && title !== "Logout") ||
          (!user && title === "Login") ||
          (user && title === "Logout")
      ),
    [user]
  );
  return (
    <NavigationContainer>
      {menuItems.map((menuItem, index) => (
        <NavigationItem key={`${index}-${menuItem.title}`} item={menuItem} />
      ))}
    </NavigationContainer>
  );
};
export default Navigation;
