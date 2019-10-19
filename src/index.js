import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Application from "./components/Application";
import ClientsProvider from "./providers/ClientsProvider";

ReactDOM.render(
  <Router>
    <ClientsProvider>
      <Application />
    </ClientsProvider>
  </Router>,
  document.getElementById("root")
);
