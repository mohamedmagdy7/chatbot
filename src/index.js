import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import store from "./store";

const chatbotDiv = document.getElementById("chatbot");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  chatbotDiv
);
