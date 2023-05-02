import { DefaultImage } from '@/constants';
import { Tour } from '@/utils/services';
import React, { FC } from 'react';
import styled from 'styled-components';

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
      display : block;
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

export const CardButton = styled.button`
  padding: 10px 20px;
  position: absolute;
  bottom :0;
  border-radius: 5px;
  background-color: #F16B51;
  color: #fff;
  border: none;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display : none;
  &:hover {
    background-color: #3e8e41;
  }
`;



const cardsData = [  {    id: 1,    image: 'https://via.placeholder.com/400x400',    title: 'Card 1',    buttonLabel: 'Learn More'  },  {    id: 2,    image: 'https://via.placeholder.com/400x400',    title: 'Card 2',    buttonLabel: 'Learn More'  },  {    id: 3,    image: 'https://via.placeholder.com/400x400',    title: 'Card 3',    buttonLabel: 'Learn More'  },  {    id: 4,    image: 'https://via.placeholder.com/400x400',    title: 'Card 4',    buttonLabel: 'Learn More'  },  {    id: 5,    image: 'https://via.placeholder.com/400x400',    title: 'Card 5',    buttonLabel: 'Learn More'  },  {    id: 6,    image: 'https://via.placeholder.com/400x400',    title: 'Card 6',    buttonLabel: 'Learn More'  }];

// const CardList = () => {
//   return (
//     <CardsContainer>
//       {cardsData.map(card =>
//         <Card key={card.id} image={card.image} title={card.title} buttonLabel={card.buttonLabel} />
//       )}
//       </CardsContainer>
//   )
// }
