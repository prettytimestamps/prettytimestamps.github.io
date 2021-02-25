import React from "react";
import ReactDOM from "react-dom";
import App from "./page/App";
import { QueryParamProvider } from "use-query-params";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <App />
      </QueryParamProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
