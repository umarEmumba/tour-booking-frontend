import { IconContainerStyled } from "../../Filters/FiltersStyled";
import Image from "next/image";

const CalendarIcon = () => {
  return (
    <IconContainerStyled>
      <Image src="/assets/images/icons/calendar.png" alt="calendar" fill />
    </IconContainerStyled>
  );
};

export default CalendarIcon;
