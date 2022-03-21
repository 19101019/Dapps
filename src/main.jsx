import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById("root")
);
//https://github.com/adrianhajdin/project_web3.0
//https://www.youtube.com/watch?v=Wn_Kb3MR_cU&t=5588s
