import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Home from "./container/Home/Home";
import store from "./store/store";
import GlobalStyles from "./assets/style/Global.style";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Home />
  </Provider>,
  document.getElementById("root")
);
