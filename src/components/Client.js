import React from "react";
import { Link } from "react-router-dom";

import ClientStyles from "./styles/ClientStyle";

const Client = ({ id, name, lastname }) => {
  return (
    <ClientStyles>
      <h3>
        {name} {lastname}
      </h3>
      <Link to={`clients/${id}`}>Ver detalle</Link>
    </ClientStyles>
  );
};

export default Client;
