const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CLICK_LIKE': {
      const { id } = action.payload;
      return state.map((card) => {
        if (card.id === id) {
          if (card.isLiked) {
            return { ...card, isLiked: false, likesCount: card.likesCount - 1 };
          }
          return { ...card, isLiked: true, likesCount: card.likesCount + 1 };
        }
        return card;
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
