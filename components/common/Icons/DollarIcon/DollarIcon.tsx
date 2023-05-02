import { IconContainerStyled } from "../../Filters/FiltersStyled";
import Image from 'next/image';

const DollarIcon = () => {
    return (
        <IconContainerStyled>
            <Image src="/assets/images/icons/dollar-circle.svg" alt="dollar" fill />
        </IconContainerStyled>
    );
}
 
export default DollarIcon
;