import axios from "axios";
import React, { Component } from "react";

export default class EmpresasCentro extends Component {
  state = {
    url: "https://apitechriders.azurewebsites.net/",
    status: false,
    provincias: [],
    tipoEmpresas: [],
    statusProvincia: false,
    statusTipoEmpresas: false,
    token: {},
  };

  inputTextNombre = React.createRef();
  inputTextDireccion = React.createRef();
  inputTextTelefono = React.createRef();
  inputTextPersonaContacto = React.createRef();
  inputTextCif = React.createRef();
  inputTextProvincia = React.createRef();
  inputTextRazonSocial = React.createRef();
  inputTextTipoEmpresa = React.createRef();

  loadProvincias = () => {
    var request = "api/provincias";
    var url = this.state.url + request;

    axios.get(url).then((response) => {
      this.setState({
        provincias: response.data,
        statusProvincia: true,
      });
    });
  };

  loadTipoEmpresasCentro = () => {
    var request = "api/tipoempresa";
    var url = this.state.url + request;
    axios.get(url).then((response) => {
      this.setState({
        tipoEmpresas: response.data,
        statusTipoEmpresas: true,
      });
    });
  };

  insertarEmpresasCentro = (e) => {
    e.preventDefault();

    var request = "api/empresascentros";
    var url = this.state.url + request;

    var nombre = this.inputTextNombre.current.value;
    var direccion = this.inputTextDireccion.current.value;
    var telefono = this.inputTextTelefono.current.value;
    var personaContacto = this.inputTextPersonaContacto.current.value;
    var cif = this.inputTextCif.current.value;
    var idProvincia = parseInt(this.inputTextProvincia.current.value);
    var razonSocial = this.inputTextRazonSocial.current.value;
    var idTipoEmpresa = parseInt(this.inputTextTipoEmpresa.current.value);

    if (
      !nombre ||
      !direccion ||
      !telefono ||
      !idProvincia ||
      !personaContacto ||
      !idTipoEmpresa
    ) {
      alert("Debes rellenar todos los campos");
    } else {
      var dataJSON = {
        idEmpresaCentro: null,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        personaContacto: personaContacto,
        cif: cif,
        idProvincia: idProvincia,
        razonSocial: razonSocial,
        idTipoEmpresa: idTipoEmpresa,
      };
      console.log(dataJSON);

      var config = {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          "Content-Type": "application/json",
        },
      };

      axios.post(url, dataJSON, config).then((response) => {
        console.log("Se ha añadido empresa / centro ", response);
      });
    }
  };

  componentDidMount = () => {
    this.loadProvincias();
    this.loadTipoEmpresasCentro();
  };

  render() {
    return (
      <div>
        <form className="max-w-full m-5" onSubmit={this.insertarEmpresasCentro}>
          <h2 className="text-center text-4xl text-gray-500 bg-transparent mb-5">
            Inscribirse como empresa / centro
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="nombre"
              id="nombre"
              ref={this.inputTextNombre}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nombre"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              ref={this.inputTextDireccion}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
              name="telefono"
              id="telefono"
              ref={this.inputTextTelefono}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="telefono"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              telefono
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="persona_contacto"
              id="persona_contacto"
              ref={this.inputTextPersonaContacto}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="persona_contacto"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Persona de contacto
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="cif"
                id="cif"
                ref={this.inputTextCif}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="cif"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                CIF
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="provincias"
                ref={this.inputTextProvincia}
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected disabled>
                  Elige la provincia
                </option>
                {this.state.statusProvincia === true &&
                  this.state.provincias.map((provincias, index) => {
                    return (
                      <option key={index} value={provincias.idProvincia}>
                        {provincias.nombreProvincia}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="razon_social"
                id="razon_social"
                ref={this.inputTextRazonSocial}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="razon_social"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                razon social
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="tiposEmpresas"
                ref={this.inputTextTipoEmpresa}
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected disabled>
                  Elige el tipo de empresa
                </option>

                {this.state.statusTipoEmpresas === true &&
                  this.state.tipoEmpresas.map((tipo, index) => {
                    return (
                      <option key={index} value={tipo.idTipoEmpresa}>
                        {tipo.descripcion}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full max-w-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
