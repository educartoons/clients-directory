import React from "react";

import Clients from "../components/Clients";
import Insights from "../components/Insights";
import WrapperStyles from "../components/styles/WrapperStyles";

const ClientsPage = () => {
  return (
    <WrapperStyles>
      <div>
        <h2>Clientes:</h2>
        <Clients />
      </div>
      <div>
        <h2>Insights:</h2>
        <Insights />
      </div>
    </WrapperStyles>
  );
};

export default ClientsPage;
