import React from "react";
import ReactDOM from "react-dom/client"; // Update import statement
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store"; // Ensure you have your store correctly imported

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
