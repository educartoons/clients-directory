import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils/utils";

export const ClientsContext = createContext();

class ClientsProvider extends Component {
  state = {
    clients: []
  };
  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("clients")
      .onSnapshot(snapshot => {
        const clients = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ clients });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { clients } = this.state;
    const { children } = this.props;
    return (
      <ClientsContext.Provider value={clients}>
        {children}
      </ClientsContext.Provider>
    );
  }
}

export default ClientsProvider;
