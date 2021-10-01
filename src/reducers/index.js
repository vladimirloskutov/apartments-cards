const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CLICK_LIKE': {
      const { id } = action.payload;
      const newState = [...state].map((card) => {
        if (card.id === id) {
          if (card.status) {
            const status = false;
            const likesCount = card.likesCount - 1;
            return { ...card, status, likesCount };
          }
          const status = true;
          const likesCount = card.likesCount + 1;
          return { ...card, status, likesCount };
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