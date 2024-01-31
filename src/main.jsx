import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart.context.jsx";
import { CategoriesProvider } from "./context/categories.context.jsx";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
