import React from "react";
import { Provider } from "react-redux";
import Board from "./views/Board";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}
