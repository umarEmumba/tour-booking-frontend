import { Tour } from "@/utils/services";
import { FC } from "react";
import styled from "styled-components";
import { LogoImage } from "../Logo/LogoStyled";
import { DescriptionStyled } from "../Description/DescriptionStyled";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Row = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 10px;

  &:first-child {
    font-weight: bold;
  }
`;
const AdditionalServicesWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const AdditionalServices = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  column-gap: 2px;
`;

interface ResponsiveTableProps {
  tour: Tour;
}
export const ResponsiveTable: FC<ResponsiveTableProps> = ({ tour }) => {
  return (
    <Table>
      <tbody>
        <Row>
          <Cell>Destination</Cell>
          <Cell>{tour.localizedCityName}</Cell>
        </Row>
        <Row>
          <Cell>Listing Name</Cell>
          <Cell>{tour.listingName}</Cell>
        </Row>
        <Row>
          <Cell>Guests Capacity</Cell>
          <Cell>{tour.listingGuestLabel}</Cell>
        </Row>
        <Row>
          <Cell>Additional Facilities</Cell>
          <Cell>
            <AdditionalServicesWraper>
              {tour.listingPreviewAmenityNames.map((service, index) => (
                <AdditionalServices key={`${index}-${service}`}>
                  <LogoImage
                    src="/assets/images/icons/tick.svg"
                    alt="tick icon"
                    width={20}
                    height={20}
                  />
                  <DescriptionStyled nowrap>{service}</DescriptionStyled>
                </AdditionalServices>
              ))}
            </AdditionalServicesWraper>
          </Cell>
        </Row>
      </tbody>
    </Table>
  );
};
