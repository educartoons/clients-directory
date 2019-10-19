import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { firestore } from "../firebase";
import FormStyles from "./styles/FormStyles";
import WrapperStyles from "../components/styles/WrapperStyles";

class AddClient extends Component {
  state = {
    id: null,
    name: "",
    lastname: "",
    age: "",
    birthDate: "",
    loading: false,
    clientAdded: null,
    newId: null
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      clientAdded: null
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    //this.setState({ loading: true });
    const { name, lastname, age, birthDate } = this.state;

    const birthDateFixed = moment(birthDate).format("MM-DD-YYYY");

    const newClient = await firestore
      .collection("clients")
      .add({ name, lastname, age, birthDate: birthDateFixed });
    this.setState({
      name: "",
      lastname: "",
      age: "",
      birthDate: "",
      loading: false,
      clientAdded: true,
      newId: newClient.id
    });
  };
  render() {
    const {
      name,
      lastname,
      age,
      birthDate,
      loading,
      clientAdded,
      newId
    } = this.state;
    return (
      <WrapperStyles>
        <FormStyles onSubmit={this.handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Agregar Cliente</h2>
            <label htmlFor="">
              Nombre:
              <input
                value={name}
                onChange={this.onChange}
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
            </label>
            <label htmlFor="">
              Apellidos:
              <input
                value={lastname}
                onChange={this.onChange}
                type="text"
                name="lastname"
                placeholder="Apellido"
                required
              />
            </label>
            <label htmlFor="">
              Edad:
              <input
                value={age}
                onChange={this.onChange}
                type="number"
                name="age"
                placeholder="Edad"
                required
              />
            </label>
            <label htmlFor="">
              Fecha de nacimiento: <span>(Mes/Dia/Año)</span>
              <input
                value={birthDate}
                onChange={this.onChange}
                type="date"
                name="birthDate"
                placeholder="Fecha de nacimiento"
                required
              />
            </label>
            {clientAdded === true && (
              <div className="success">
                El cliente fue agregado satisfactoriamente, puede ver el detalle
                del mismo <Link to={`/clients/${newId}`}>aqui</Link>
              </div>
            )}
            <button disabled={loading}>Agrega{loading ? "ndo" : "r"}</button>
          </fieldset>
        </FormStyles>
        <div></div>
      </WrapperStyles>
    );
  }
}

export default AddClient;
