import React from 'react';
import { connect } from 'react-redux';
import clickLike from '../actions';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

const Card = (props) => {
  const {
    dispatch, id, title, description, price, likesCount, isLiked,
  } = props;
  const likeButtonClasses = isLiked ? 'btn btn-primary' : 'btn btn-outline-primary';

  const handleButtonClick = (e) => {
    const currentCardId = Number(e.target.id);
    dispatch(clickLike(currentCardId));
  };

  return (
    <div className="card mb-5">
      <img src="..." className="card-img-top" alt="img cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex flex-row-reverse">
          <button type="button" className="btn btn-primary ml-1" disabled>{likesCount}</button>
          <button id={id} type="button" className={likeButtonClasses} onClick={handleButtonClick}>
            Like
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart align-middle"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
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
