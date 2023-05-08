import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    button {
      display: block;
    }
  }
  @media (max-width: 991px) {
    flex: 0 0 calc(50% - 20px);
  }
  @media (max-width: 767px) {
    flex: 0 0 calc(100% - 20px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export const CardDescription = styled.p`
  margin: 10px 10px;
  text-align: left;
`;

interface CardButtonProps {
  visible?: boolean;
}
export const CardButton = styled.button<CardButtonProps>`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f16b51;
  color: #fff;
  font-size: 1rem;
  width: 100%;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  ${(props) => !props.visible && "display: none"};
  &:hover {
    background-color: #3e8e41;
  }
`;
