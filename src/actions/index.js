const clickLike = (id) => ({
  type: 'CLICK_LIKE',
  payload: {
    id,
  },
});

export default clickLike;
