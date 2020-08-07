import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      apellidos: "",
      edad: "",
      email: "",
      contrasena: ""
    };
  }

  ChangeState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="form">
          <h2>Formulario de Registro</h2>
          <form>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={this.ChangeState}
            />
            <input
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              onChange={this.ChangeState}
            />
            <input
              type="text"
              placeholder="Edad"
              name="edad"
              onChange={this.ChangeState}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.ChangeState}
            />
            <input
              type="text"
              placeholder="Contraseña"
              name="contrasena"
              onChange={this.ChangeState}
            />
          </form>
        </div>
        <div className="results">
          <h2>Datos</h2>
          {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}
