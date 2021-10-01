import React from 'react';
import Card from './Card';

const CardsBoard = () => {
  const cardsBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
    <div className="col-4">
      <Card />
    </div>
  ));

  return (
    <div className="row mx-auto mt-5">
      {cardsBoard}
    </div>
  );
};

export default CardsBoard;
