const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CLICK_LIKE': {
      const { id } = action.payload;
      const newState = state.map((card) => {
        if (card.id === id) {
          if (card.isLiked) {
            const isLiked = false;
            const likesCount = card.likesCount - 1;
            return { ...card, isLiked, likesCount };
          }
          const isLiked = true;
          const likesCount = card.likesCount + 1;
          return { ...card, isLiked, likesCount };
        }
        return card;
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
