const initialSatate = 0;
const changeTheNumber = (state = initialSatate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
      break;
    default:
      return state;
  }
};

export default changeTheNumber;
