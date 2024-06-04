// import { userReduce } from "./userReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import cardsReduser from "./reducers/cardsReduser";

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
