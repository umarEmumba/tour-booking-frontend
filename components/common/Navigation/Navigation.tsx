import { menu } from "@/constants";
import { NavigationContainer } from "./NavigationStyled";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
    return (
        <NavigationContainer>
            {
                menu.map((menuItem,index) => 
                <NavigationItem 
                    key={`${index}-${menuItem.title}`} 
                    item={menuItem}  />)
            }
        </NavigationContainer>
    )
}
export default Navigation;