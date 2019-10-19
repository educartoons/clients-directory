import React, { Component } from "react";
import moment from "moment";

import { firestore } from "../firebase";

import FormStyles from "../components/styles/FormStyles";
import WrapperStyles from "../components/styles/WrapperStyles";

class ClientPage extends Component {
  state = {
    loading: true
  };
  getClientId() {
    return this.props.match.params.id;
  }
  getClient() {
    return firestore.doc(`clients/${this.getClientId()}`).get();
  }
  componentDidMount = async () => {
    const client = await this.getClient();
    this.setState({ loading: false });
    if (client.exists) {
      const { name, lastname, age, birthDate } = client.data();
      const birthDateFixed = moment(birthDate, "MM-DD-YYYY").format(
        "YYYY-MM-DD"
      );
      const deathDate = moment(birthDate, "MM-DD-YYYY")
        .add(75, "YEARS")
        .format("YYYY-MM-DD");
      this.setState({
        id: client.id,
        name,
        lastname,
        age,
        birthDate: birthDateFixed,
        deathDate,
        exists: true
      });
    } else {
      this.setState({
        exists: false
      });
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { loading, exists } = this.state;
    if (loading) return <p>Cargando...</p>;
    if (exists !== true) {
      return <p>El cliente no existe en nuestra base de datos</p>;
    } else {
      const { name, lastname, age, birthDate, deathDate } = this.state;
      return (
        <WrapperStyles>
          <FormStyles>
            <fieldset>
              <h2>Cliente:</h2>
              <label htmlFor="name">
                Nombre:
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={name}
                  readOnly
                />
              </label>
              <label htmlFor="lastname">
                Apellido:
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  defaultValue={lastname}
                  readOnly
                />
              </label>
              <label htmlFor="age">
                Edad:
                <input
                  id="age"
                  name="age"
                  type="number"
                  defaultValue={age}
                  readOnly
                />
              </label>
              <label htmlFor="birthDate">
                Fecha de Nacimiento: (Mes/Dia/Año)
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  defaultValue={birthDate}
                  readOnly
                />
              </label>
              <label htmlFor="deathDate">
                Fecha de probable de muerte* (Mes/Dia/Año)
                <input
                  id="deathDate"
                  name="deathDate"
                  type="date"
                  defaultValue={deathDate}
                  readOnly
                />
              </label>
              <p>
                <sup>*</sup>Cálculo basado en una esperanza de vida promedio de
                75 años para Perú, segun datos del Instituto Nacional de
                Estadística e Informática
              </p>
            </fieldset>
          </FormStyles>
          <div></div>
        </WrapperStyles>
      );
    }
  }
}

export default ClientPage;
