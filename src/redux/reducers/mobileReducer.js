import { Buy_Mobile } from "./../actions/actionType";

const intialState = {
  numberOfMobiles: 100,
};

const mobileReducer = (state=intialState, action) => {
  switch (action.type) {
    case Buy_Mobile:
      return { numberOfMobiles: state.numberOfMobiles - 1 };
    default:
      return state;
  }
};
export default mobileReducer
