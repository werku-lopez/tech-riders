import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { User } from "../assets/icons/icons";

export default class TodasEmpresasPage extends Component {
  state = {
    empresas: [],
    provincias: [],
    status: false,
    statusProvincia: false,
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
  loadEmpresas = () => {
    var request = "api/empresascentros";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;
    console.log(url);
    axios.get(url).then((response) => {
      this.setState({
        status: true,
        empresas: response.data,
      });
      console.log(this.state.empresas);
    });
  };
  componentDidMount = () => {
    this.loadEmpresas();
    this.loadProvincias();
  };
  render() {
    const getProvinciaNombre = (idProvincia) => {
      const provincia = this.state.provincias.find(
        (p) => p.idProvincia === idProvincia
      );
      return provincia ? provincia.nombreProvincia : "Desconocido";
    };
    //idTipoTecnologia
    return (
      <>
        <div class="flex flex-col text-center w-full my-12">
          <h2 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Empresas
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Estos son las empresas que colaboran con nosotros
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
              this.state.empresas.filter(empresa => empresa.idTipoEmpresa === 1)
              .map((empresa, index) => (
                  <>
                    <li
                      id={index}
                      class="shadow-sm shadow-[#00000050]  rounded bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    >
                      <div class="whitespace-nowrap flex sm:flex-row flex-col-reverse gap-2 items-end sm:justify-between   px-6 py-4 font-medium text-gray-900 bg-primary-50">
                        <div className="inline-flex  gap-1">
                          <p className="bg-primary-300 font-bold p-2 px-4 rounded-full">
                            {empresa.nombre} - {empresa.razonSocial}
                          </p>
                          {/* <p className="bg-secondary-200 p-2 px-4 rounded-full">
                            {getProvinciaNombre(charla.idProvincia)}
                          </p> */}
                          {/* <p className="bg-secondary-200 p-2 px-4 rounded-full">
                            {empresa.razonSocial}
                          </p> */}
                        </div>
                       
                      </div>
                      <div class="flex flex-row flex-wrap px-6 py-4 font-medium text-gray-900 ">
                        <div className="flex  flex-wrap items-center gap-2 mb-4">
                          
                          <p className="block shrink-0 mb-2">
                            Direccion:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {empresa.direccion}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
                            Teléfono:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {empresa.telefono}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
                            Contacto:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {empresa.personaContacto}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
                            Contacto:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                            {getProvinciaNombre(empresa.idProvincia)}
                            </span>{" "}
                          </p>
                          {/* <p className="block shrink-0 mb-2">
  Tecnologías:{" "}
  <span className="bg-amber-100 rounded-full py-1 px-6">
    {getTecnologiaCharlas(charla.idCharla)}
  </span>{" "}
</p> */}
                        </div>

                        {/* <input
                          type="datetime-local"
                          disabled
                          value={charla.fechaCharla}
                        /> */}
                        
                      </div>
                    </li>
                  </>
                     ))}
          </ul>
        </section>
        <div class="flex flex-col text-center w-full my-12">
          <h2 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Centros colaboradores
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Estos son las centros educativos que colaboran con nosotros
          </p>
        </div>
        <section class="relative bg-neutral-50 p-2 px-4 overflow-x-auto shadow-sm shadow-[#00000050] rounded">
          <ul class="w-full flex flex-col gap-4 py-4 text-left text-sm text-primary-500 rtl:text-right dark:text-primary-400">
            {this.state.status === true &&
              this.state.empresas.filter(empresa => empresa.idTipoEmpresa === 2)
              .map((empresa, index) => (
                  <>
                    <li
                      id={index}
                      class="shadow-sm shadow-[#00000050]  rounded bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    >
                      <div class="whitespace-nowrap flex sm:flex-row flex-col-reverse gap-2 items-end sm:justify-between   px-6 py-4 font-medium text-gray-900 bg-primary-50">
                        <div className="inline-flex  gap-1">
                          <p className="bg-primary-300 font-bold p-2 px-4 rounded-full">
                            {empresa.nombre} - {empresa.razonSocial}
                          </p>
                          {/* <p className="bg-secondary-200 p-2 px-4 rounded-full">
                            {getProvinciaNombre(charla.idProvincia)}
                          </p> */}
                          {/* <p className="bg-secondary-200 p-2 px-4 rounded-full">
                            {empresa.razonSocial}
                          </p> */}
                        </div>
                       
                      </div>
                      <div class="flex flex-row flex-wrap px-6 py-4 font-medium text-gray-900 ">
                        <div className="flex  flex-wrap items-center gap-2 mb-4">
                          
                          <p className="block shrink-0 mb-2">
                            Direccion:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {empresa.direccion}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
                            Teléfono:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {empresa.telefono}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
                            Contacto:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                              {empresa.personaContacto}
                            </span>{" "}
                          </p>
                          <p className="block shrink-0 mb-2">
                            Contacto:{" "}
                            <span className="bg-amber-100 rounded-full py-1 px-6">
                            {getProvinciaNombre(empresa.idProvincia)}
                            </span>{" "}
                          </p>
                          {/* <p className="block shrink-0 mb-2">
  Tecnologías:{" "}
  <span className="bg-amber-100 rounded-full py-1 px-6">
    {getTecnologiaCharlas(charla.idCharla)}
  </span>{" "}
</p> */}
                        </div>

                        {/* <input
                          type="datetime-local"
                          disabled
                          value={charla.fechaCharla}
                        /> */}
                        
                      </div>
                    </li>
                  </>
                     ))}
          </ul>
        </section>
      </>
    );
  }
}
