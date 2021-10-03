import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const mapStateToProps = (state) => ({
  cards: state,
});

const CardsBoard = (props) => {
  const { cards } = props;
  const cardsBoard = cards.map(({
    id, imageUrl, title, description, price, likesCount, isLiked,
  }) => (
    <div key={id} className="col-4">
      <Card
        id={id}
        imageUrl={imageUrl}
        title={title}
        description={description}
        price={price}
        likesCount={likesCount}
        isLiked={isLiked}
      />
    </div>
  ));

  return (
    <div className="row mx-auto mt-5">
      {cardsBoard}
    </div>
  );
};

export default connect(mapStateToProps)(CardsBoard);
