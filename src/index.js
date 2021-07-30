import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "antd/dist/antd.css";
import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
  <CartContextProvider>
    <App />
  </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
