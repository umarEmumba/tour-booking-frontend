import Image from 'next/image';
import { FilterContainerStyled, FilterItemStyled, FilterWraper, IconContainerStyled } from "./FiltersStyled";
import Location from "./Location/Location";
import DatePicker from './DatePicker/DatePicker';
import PriceRange from './PriceRange/PriceRange';

const Filters = () => {
    return (
       <FilterContainerStyled>
        <FilterWraper>

            <FilterItemStyled>
                <IconContainerStyled>
                    <Image src="/assets/images/icons/location.png" alt="location" fill />
                </IconContainerStyled>
                <Location />
            </FilterItemStyled>

            <FilterItemStyled>
            <IconContainerStyled>
                    <Image src="/assets/images/icons/calendar.png" alt="location" fill />
            </IconContainerStyled>
                <DatePicker />
            </FilterItemStyled>

            <FilterItemStyled noBorder>
                <IconContainerStyled>
                    <Image src="/assets/images/icons/dollar-circle.svg" alt="location" fill />
                </IconContainerStyled>
                <PriceRange />
            </FilterItemStyled>

            <FilterItemStyled noBorder>

            </FilterItemStyled>

        </FilterWraper>
       </FilterContainerStyled>
     );
}
 
export default Filters;