import { menuItem } from "@/constants";
import { FC } from "react";

interface NavigationItemPropsType {
   item :  menuItem;
}
const NavigationItem : FC<NavigationItemPropsType> = ({item}) =>{
    
    return (
        <div>
            <a href={item.url}>{item.title}</a>
        </div>
    )
}
export default NavigationItem;