import { Buy_Laptop } from "./../actions/actionType";

const intialState = {
  numberOfLaptops: 100,
};

const laptopReducer = (state=intialState, action) => {
  switch (action.type) {
    case Buy_Laptop:
      return { numberOfLaptops: state.numberOfLaptops - 1 };
    default:
      return state;
  }
};
export default laptopReducer
