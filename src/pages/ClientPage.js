import React from "react";
import ClientProfile from "../components/ClientProfile";

const ClientPage = ({ match }) => {
  return <ClientProfile id={match.params.id} />;
};

export default ClientPage;
