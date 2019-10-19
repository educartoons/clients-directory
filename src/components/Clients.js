import React, { useContext } from "react";

import Client from "./Client";
import { ClientsContext } from "../providers/ClientsProvider";
import ClientsStyles from "./styles/ClientsStyles";

const Clients = () => {
  const clients = useContext(ClientsContext);
  return (
    <ClientsStyles>
      {clients.map(client => (
        <Client key={client.id} {...client} />
      ))}
    </ClientsStyles>
  );
};

export default Clients;
