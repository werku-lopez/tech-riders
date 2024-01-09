import React, { Component } from "react";
import axios from "axios";
import { NavLink, Navigate } from "react-router-dom";

export default class LoginPage extends Component {
  cajaMail = React.createRef();
  cajaPassword = React.createRef();

  state = {
    statusLogueado: false,
    statusLogin: false,
    token: "",
    statusVerficado: false
  };

  postLogin = (e) => {
    e.preventDefault();

    var mail = this.cajaMail.current.value;
    var password = this.cajaPassword.current.value;
    console.log(mail, password);

    var usuario = {
      email: mail,
      password: password,
    };
    console.log(usuario);

    var request = "api/Auth/Login";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;

    axios.post(url, usuario).then((response) => {
      console.log(response.data);
      if (response.data) {
        this.setState({
          statusLogueado: true,
          token: response.data.response,
          statusVerficado: true,
          statusLogin:true
        });
      
      } else{
        this.setState({
          statusLogueado: false,
          statusVerficado: true
        });
      }
    });
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "400px",
          border: "3px solid black",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
       
        <h1>
          <b>INICIE SESION</b>
        </h1>
        <form onSubmit={this.postLogin}> 
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              style={{ border: "1px solid black" }}
              type="email"
              id="email"
              name="email"
              ref={this.cajaMail}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password">Contraseña:</label>
            <input
              style={{ border: "1px solid black" }}
              type="password"
              id="password"
              name="password"
              ref={this.cajaPassword}
              required
            />
          </div>

          <button>Iniciar Sesion</button>
         
          {this.state.statusVerficado && (
  <>
    {this.state.statusLogueado ? (
      <div>
         <p>USUARIO REGISTRADO</p>
        <button>Ver todos los techriders</button>
      </div>
             
    ) : (
      <>
        <p>USUARIO NO REGISTRADO</p>
        <button style={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }}>Inscribirse Como Centro o empresa</button>
      </>
    )}
  </>
)}
        </form>
      
        <div>
          {
            this.state.statusLogin ==true&&(
                   <Navigate to={"/vertechriders/"+this.state.token}></Navigate>
            )
          }
        </div>
      </div>
    );
  }
}
