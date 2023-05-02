import { menuItem } from "@/constants";
import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";

interface NavigationItemPropsType {
   item :  menuItem;
}
const NavigationItem : FC<NavigationItemPropsType> = ({item}) =>{
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout, loginWithPopup } =
    useAuth0();
    // console.log({user})
    return (
        <div>
            {
                item.url == 'login' ?
                <button onClick={() => loginWithRedirect()}>Log in</button>
                :
                <a href={item.url}>{item.title}</a>
            }
        </div>
    )
}
export default NavigationItem;