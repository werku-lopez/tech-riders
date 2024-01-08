import axios from "axios";
import React, { Component } from "react";

export default class SolicitarCharlas extends Component {
  state = {
    status: false,
    estadosCharla: [],
    techRiders: [],
    token: {},
  };

  /*inputTextNombre = React.createRef();
  inputTextPersonaContacto = React.createRef();
  inputTextEmail = React.createRef();
  inputTextTelefono = React.createRef();*/
  inputTextTechRider = React.createRef();
  inputTextEstadoCharla = React.createRef();
  inputTextDescripcion = React.createRef();
  inputTextFechaCharla = React.createRef();
  inputTextFechaSolicitud = React.createRef();
  inputTextTurno = React.createRef();
  inputTextModalidad = React.createRef();

  //   inputTextCif = React.createRef();
  //   inputTextProvincia = React.createRef();
  //   inputTextRazonSocial = React.createRef();
  //   inputTextTipoEmpresa = React.createRef();

  enviarSolicitud = () => {
    //var idCentro = this.props.idCentro;
    var estado_charla = this.inputTextEstadoCharla.current.value;
    var descripcion = this.inputTextDescripcion.current.value;
    var fecha_charla = this.inputTextFechaCharla.current.value;
    var fecha_solicitud = this.inputTextFechaSolicitud.current.value;
    var turno = this.inputTextTurno.current.value;
    var modalidad = this.inputTextModalidad.current.value;

    var dataJSON = {
      idCharla: 0,
      descripcion: "", // SQL, SPRING, MOTIVACIONAL
      idEstadoCharla: 0, // estado charla {CANCELADA, PENDIENTE, PROCESO, FINALIZADA}
      fechaCharla: "", // fecha
      observaciones: "", //comentario
      idTechRider: null,
      fechaSolicitud: "", // fecha en la que se pidió
      turno: "", // {MAÑANA, TARDE}
      modalidad: "", // {PRESENCIAL, ONLINE, ect..}
      acreditacionLinkedIn: null,
      idCurso: 0, // curso seleccionado del centro
      idProvincia: 0, // dato capturado del centro
    };

    var request = "api/charlas";
    var url = "https://apitechriders.azurewebsites.net/" + request;

    axios.post(url, dataJSON).then((response) => {
      //console.log(response);
    });
  };

  loadTechRiders = (token) => {
    var config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    var request = "api/usuarios";
    var url = "https://apitechriders.azurewebsites.net/" + request;

    axios.get(url, config).then((response) => {
      // recuperamos los usuarios que son techRiders
      var riders = response.data.filter((tech) => {
        if (tech.idRole === 3) {
          return tech;
        } else {
          return false;
        }
      });

      this.setState({ techRiders: riders });
    });
  };

  loadEstadosCharla = () => {
    var url = "https://apitechriders.azurewebsites.net/";
    var request = "api/estadoscharlas";

    axios.get(url + request).then((response) => {
      this.setState({
        estadosCharla: response.data,
        status: true,
      });
    });
  };

  getTokenUser = () => {
    var requestLogin = "api/auth/login";
    var urlLogin = "https://apitechriders.azurewebsites.net/" + requestLogin;

    var username = "john.doe@example.com";
    var password = "12345";

    var user = {
      email: username,
      password: password,
    };

    var dataJSON = JSON.stringify(user);
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post(urlLogin, dataJSON, config).then((response) => {
      this.loadTechRiders(response.data.response);
      this.setState({
        token: response.data.response,
      });
    });
  };

  componentDidMount = () => {
    this.getTokenUser();
    this.loadEstadosCharla();
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="p-10 mb-10 font-semibold text-4xl border-b-2 ">
          Solicitud de charla
        </h1>
        <form onSubmit={this.enviarSolicitud} className="w-full">
          <div className="flex flex-wrap items-center mb-2">
            <div className="w-full md:w-1/2 px-3 mb-4 ">
              <label htmlFor="desc" className="mb-4">
                Descripción
              </label>
              <input
                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                ref={this.inputTextDescripcion}
                type="text"
                id="desc"
                placeholder=" ¿De qué va la charla?"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4">
              <label htmlFor="mod">Modalidad</label>
              <input
                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                ref={this.inputTextModalidad}
                type="text"
                id="mod"
                placeholder=" modalidad de la charla"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4">
              <label htmlFor="turno">Turno</label>
              <input
                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                ref={this.inputTextTurno}
                type="text"
                id="turno"
                placeholder="turno"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-4">
              <label htmlFor="estadocharla">Asignar techRider: </label>
              <select
                name="techrider"
                ref={this.inputTextTechRider}
                required
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="0" disabled selected>
                  {" "}
                  Seleccione un techRider
                </option>
                {this.state.techRiders.map((techRider, index) => {
                  return <option key={index}>{techRider.apellidos}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-2">
            <div className="w-full md:w-1/3 px-3 mb-4">
              <label htmlFor="estadocharla">Estado charla</label>
              <select
                name="estadocharla"
                id="estadocharla"
                ref={this.inputTextEstadoCharla}
                required
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="0" disabled selected>
                  {" "}
                  seleccione un estado de la charla
                </option>
                {this.state.estadosCharla.map((estado, index) => {
                  return (
                    <option key={estado.idEstadoCharla}>{estado.tipo}</option>
                  );
                })}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-4">
              <label htmlFor="fechacharla">Fecha charla</label>
              <input
                ref={this.inputTextFechaCharla}
                type="date"
                required
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-4">
              <label htmlFor="fechacharla">Fecha Solicitud</label>
              <input
                ref={this.inputTextFechaSolicitud}
                type="date"
                required
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="pt-8 mb-4 text-center">
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    );
  }
}
