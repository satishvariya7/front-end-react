const initValues = {
  movieItems: [],
};
const reducer = (state = initValues, action) => {  
  switch (action.type) {
    case "SET_DATA":
      return { ...state, movieItems: action.payload };
    case "RESET":
      return state;
    default:
      return state;
  }
};
export default reducer;
