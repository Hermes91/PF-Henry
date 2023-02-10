import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import reducer from "../reducer/reducerIndex";
import reducerCart from "../reducer/reducerCart";
import thunk from "redux-thunk";

function saveToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
}
function loadFromLocalStorage() {
  // localStorage.clear() // Borra todo el LocalStorage.
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({ reducer, reducerCart });

const presistedState = loadFromLocalStorage();
const store = createStore(
  reducers,
  presistedState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
