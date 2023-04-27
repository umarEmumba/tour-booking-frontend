import Image from 'next/image'
import { LogoContainer, LogoImage } from "./LogoStyled";

const Logo = () => {
    return (
    <LogoContainer>
        <Image src="/assets/images/logo.png" alt="logo" width={50} height={50}/>
    </LogoContainer>
    )
}
export default Logo;