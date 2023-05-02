import { Tour } from "@/utils/services";
import { FC } from "react";
import { HeadingStyled } from "../common/styled/HeadingStyled";
import Image from 'next/image';
import { IconContainerStyled } from "../common/Filters/FiltersStyled";


interface TourDetailProps {
    tour : Tour
}
const TourDetail : FC<TourDetailProps> = ({tour}) => {
    return (
        <>
            <HeadingStyled>{tour.title}</HeadingStyled>
            
            <IconContainerStyled>
                <Image src="/assets/images/icons/location.png" alt="location" fill />
            </IconContainerStyled>
        </>
     );
}
 
export default TourDetail;