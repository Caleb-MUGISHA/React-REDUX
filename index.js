const redux = require("redux");

const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buycake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
  numOfIcecream: 25,
};
// a reducer is basically a listener to actions

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // first make a copy of the state
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        // first make a copy of the state
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};
// give the reducer access to the store
const store = createStore(reducer);
console.log("initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state: ", store.getState())
);
// emit action
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
