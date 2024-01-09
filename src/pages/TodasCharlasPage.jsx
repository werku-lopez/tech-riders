import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { User } from "../assets/icons/icons";

export default class TodasCharlasPage extends Component {
  state = {
    charlas: [],
    provincias: [],
    tecnologiascharlas: [],
    tecnologias: [],
    status: false,
    statusProvincia: false,
    isLoading: true,
  };
  setLoadingState = (loading) => {
    this.setState({
      isLoading: loading,
    });
  };
  loadProvincias = () => {
    var request = "api/provincias";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;
    console.log(url);
    axios.get(url).then((response) => {
      this.setState({
        statusProvincia: true,
        provincias: response.data,
      });
      console.log(this.state.provincias);
    });
  };
  loadTecnologiasCharlas = () => {
    var request = "api/tecnologias";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;
    console.log(url);
    axios.get(url).then((response) => {
      this.setState({
        tecnologias: response.data,
      });
      console.log(this.state.tecnologias);
    });
  };
  loadTecnologias = () => {
    var request = "api/tecnologiascharlas";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;
    console.log(url);
    axios.get(url).then((response) => {
      this.setState({
        tecnologiascharlas: response.data,
      });
      console.log(this.state.tecnologiascharlas);
    });
  };
  loadCharlas = () => {
    var request = "api/charlas";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;
    this.setLoadingState(true);
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.setState({
          status: true,
          charlas: response.data,
        });
        console.log(this.state.charlas);
      })
      .finally(() => {
        this.setLoadingState(false);
      });
  };
  componentDidMount = () => {
    this.loadCharlas();
    this.loadProvincias();
    this.loadTecnologiasCharlas();
    this.loadTecnologias();
  };
  render() {
    const getProvinciaNombre = (idProvincia) => {
      const provincia = this.state.provincias.find(
        (p) => p.idProvincia === idProvincia
      );
      return provincia ? provincia.nombreProvincia : "Desconocido";
    };
    const getTecnologiaNombre = (idTecnologia) => {
      const tecnologia = this.state.tecnologias.find(
        (t) => t.idTecnologia === idTecnologia
      );
      return tecnologia ? tecnologia.nombreTecnologia : "Desconocido";
    };
    const getTecnologiaCharlas = (idCharla) => {
      const tecnologias = this.state.tecnologiascharlas
        .filter((tecnologia) => tecnologia.idCharla === idCharla)
        .map((tecnologia) => getTecnologiaNombre(tecnologia.idTecnologia));
    
      return tecnologias.length > 0 ? tecnologias.join(", ") : "No especificado";
    };
    
    //idTipoTecnologia
    return (
      <>
        <div class="flex flex-col text-center w-full my-12">
          <h2 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Charlas
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Mira nuestras charlas disponibles y las charlas que hemos dado
          </p>
        </div>
        {/* Mostrar el esqueleto de carga mientras isLoading es true */}
        {this.state.isLoading && (
          <div className="skeleton-loader">
            <section className="relative animate-pulse bg-primary-50 p-2 px-4 overflow-x-auto shadow-md sm:rounded-lg">
              <ul class="w-full text-left text-sm text-primary-500 rtl:text-right dark:text-primary-400">
                <li class="shadow-sm shadow-[#00000050] mt-4 rounded bg-primary hover:bg-primary-50 dark:border-gray-700 dark:bg-primary-800 dark:hover:bg-primary-600">
                  <div class="whitespace-nowrap flex sm:flex-row flex-col-reverse gap-2 items-end sm:justify-between   px-6 py-4 font-medium text-gray-900 bg-primary-50">
                    <div className="inline-flex  gap-1">
                      <p className="bg-primary-300 font-bold p-2 px-4 rounded-full"></p>
                      <p className="bg-primary-200 p-2 px-4 rounded-full"></p>
                      <p className="bg-primary-200 p-2 px-4 rounded-full"></p>
                    </div>
                    <NavLink to={"/login"}>
                      <button class="shrink-0 text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                        Solicitar Charla
                      </button>
                    </NavLink>
                  </div>
                  <div class="flex flex-row flex-wrap px-6 py-4 font-medium text-gray-900 ">
                    <div className="flex  flex-wrap items-center gap-2 mb-4">
                      <p className="mb-2">
                        Estado:{" "}
                        <span className="bg-primary-500 rounded-full p-1 px-4"></span>{" "}
                      </p>

                      <p className="block shrink-0 mb-2">
                        Turno:{" "}
                        <span className="bg-primary-100 rounded-full py-1 px-6"></span>{" "}
                      </p>
                    </div>

                    <div className="inline-flex w-full flex-row gap-2">
                      <a href="">
                        <User className=" hover:bg-primary-600 transition-all duration-300 bg-primary-300 stroke-primary-800 rounded-full w-12 h-12" />
                      </a>

                      <p className="bg-primary-50 p-2 rounded "></p>
                    </div>
                  </div>
                </li>
              </ul>
              <p>Loading...</p>
            </section>
          </div>
        )}

        <section class="relative bg-neutral-50 p-2 px-4 overflow-x-auto shadow-sm shadow-[#00000050] rounded">
          <ul class="w-full flex flex-col gap-4 py-4 text-left text-sm text-primary-500 rtl:text-right dark:text-primary-400">
            {this.state.status === true &&
              this.state.charlas.map((charla, index) => {
                return (
                  <>
                    <li
                      id={index}
                      class="shadow-sm shadow-[#00000050]  rounded bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    >
                      <div class="whitespace-nowrap flex sm:flex-row flex-col-reverse gap-2 items-end sm:justify-between   px-6 py-4 font-medium text-gray-900 bg-primary-50">
                        <div className="inline-flex  gap-1">
                          <p className="bg-primary-300 font-bold p-2 px-4 rounded-full">
                            {charla.descripcion}
                          </p>
                          <p className="bg-secondary-200 p-2 px-4 rounded-full">
                            {getProvinciaNombre(charla.idProvincia)}
                          </p>
                          <p className="bg-secondary-200 p-2 px-4 rounded-full">
                            {charla.modalidad}
                          </p>
                        </div>
                        <NavLink to={"/login"}>
                          <button class="shrink-0 text-white bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg">
                            Solicitar Charla
                          </button>
                        </NavLink>
                      </div>
                      <div class="flex flex-row flex-wrap px-6 py-4 font-medium text-gray-900 ">
                        <div className="flex  flex-wrap items-center gap-2 mb-4">
                          {(() => {
                            switch (charla.idEstadoCharla) {
                              case 1:
                                return <p></p>;
                              case 2:
                                return (
                                  <p className="mb-2">
                                    Estado:{" "}
                                    <span className="bg-secondary-200 rounded-full p-1 px-4">
                                      Disponible
                                    </span>{" "}
                                  </p>
                                );
                              case 3:
                                return (
                                  <p className="mb-2">
                                    Estado:{" "}
                                    <span className="bg-amber-100 rounded-full p-1 px-4">
                                      En marcha
                                    </span>{" "}
                                  </p>
                                );
                              case 4:
                                return (
                                  <p className="shrink-0 mb-2">
                                    Estado:{" "}
                                    <span className="bg-accent-100 rounded-full p-1 px-4">
                                      No disponible
                                    </span>{" "}
                                  </p>
                                );
                              case 5:
                                return (
                                  <p className="mb-2">
                                    Estado:{" "}
                                    <span className="bg-gray-500 rounded-full p-1 px-4">
                                      Pasada
                                    </span>{" "}
                                  </p>
                                );
                              default:
                                return null;
                            }
                          })()}
                          <p className="block shrink-0 mb-2">
                            Turno:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {charla.turno}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
  Tecnologías:{" "}
  <span className="bg-amber-100 rounded-full py-1 px-6">
    {getTecnologiaCharlas(charla.idCharla)}
  </span>{" "}
</p>
                        </div>

                        {/* <input
                          type="datetime-local"
                          disabled
                          value={charla.fechaCharla}
                        /> */}
                        <div className="inline-flex w-full flex-row gap-2">
                          {(() => {
                            switch (charla.acreditacionLinkedIn) {
                              case null:
                                // return <p className="bg-primary-50 p-2 rounded">Sin comentarios</p>;
                                return <></>;
                              default:
                                return (
                                  // <p className="bg-primary-50 p-2 rounded">
                                  //   {charla.acreditacionLinkedIn}{" "}
                                  // </p>
                                  <a href={charla.acreditacionLinkedIn}>
                                    <User className=" hover:bg-primary-600 transition-all duration-300 bg-accent-300 stroke-primary-800 rounded-full w-12 h-12" />
                                  </a>
                                );
                            }
                          })()}
                          {(() => {
                            switch (charla.observaciones) {
                              case null:
                                // return <p className="bg-primary-50 p-2 rounded">Sin comentarios</p>;
                                return <p></p>;
                              default:
                                return (
                                  <p className="bg-primary-50 p-2 rounded ">
                                    {charla.observaciones}{" "}
                                  </p>
                                );
                            }
                          })()}
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
          </ul>
        </section>
      </>
    );
  }
}
