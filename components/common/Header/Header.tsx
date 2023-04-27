'use client'

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { HeaderContainer } from "../styled/HeaderStyled";

const Header = () => {
    return (
    <HeaderContainer>
        <Logo />
        <Navigation />
    </HeaderContainer>
    );
}
export default Header;