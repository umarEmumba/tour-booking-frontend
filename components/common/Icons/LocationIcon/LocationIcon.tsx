import { IconContainerStyled } from "../../Filters/FiltersStyled";
import Image from 'next/image';

const LocationIcon = () => {
    return ( 
        <IconContainerStyled>
            <Image src="/assets/images/icons/location.png" alt="location" fill />
        </IconContainerStyled>
     );
}
 
export default LocationIcon;