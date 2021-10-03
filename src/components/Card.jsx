import React from 'react';
import { connect } from 'react-redux';
import clickLike from '../actions';
import like from '../utils/like';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

const Card = (props) => {
  const {
    dispatch,
    id,
    imageUrl,
    title,
    description,
    price,
    likesCount,
    isLiked,
  } = props;
  const likeButtonClasses = isLiked ? 'btn btn-primary' : 'btn btn-outline-primary';

  const handleButtonClick = (e) => {
    const currentCardId = Number(e.target.id);
    dispatch(clickLike(currentCardId));
  };

  return (
    <div className="card mb-5">
      <img src={imageUrl} className="card-img-top" alt="img cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex flex-row-reverse">
          <button type="button" className="btn btn-primary ml-1" disabled>{likesCount}</button>
          <button id={id} type="button" className={likeButtonClasses} onClick={handleButtonClick}>
            Like
            {' '}
            {like}
          </button>
          <button type="button" className="btn mr-1" disabled>
            {price}
            {' '}
            руб.
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Card);
