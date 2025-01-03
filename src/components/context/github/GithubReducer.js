const githubReducer = (state, action) => {
  switch (action.type) {
    case "START_FETCH":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
