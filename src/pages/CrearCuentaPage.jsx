import React, { Component, useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormCentroEducativo from "../components/forms/FormCentroEducativo";
import FormEmpresa from "../components/forms/FormEmpresa";
import FormTR from "../components/forms/FormTR";

export default function CrearCuentaPage() {
  const [formulario, setFormulario] = useState(null);

  const handleFormularioClick = (tipoUsuario) => {
    setFormulario(tipoUsuario);
  };

  return (
    <>
      <section class="text-gray-600 body-font mt-6">
        <div class="flex flex-wrap w-full mb-12 flex-col items-center text-center">
          <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Registrate ahora
          </h2>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Sigue los siguientes pasos
          </p>
        </div>
        <div class="container bg-white px-10 sm:px-5 py-12 mx-auto flex flex-wrap shadow-sm shadow-[#00000050] rounded-xl">
          <div class="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-primary-100 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Selecciona Usuario
                </h2>
                <p class="leading-relaxed">
                  ¿Qué tipo de usario eres? Tech Riders, Centro Educativo...
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-primary-100 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Rellena el formulario
                </h2>
                <p class="leading-relaxed">
                  Facilítamos los datos para registrarte.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-primary-100 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Espera nuestra respuesta
                </h2>
                <p class="leading-relaxed">
                  Debido a la información sensible deberás esperar a que uno de
                  nuestros administradores acepte tu solicitud. Te enviaremos un
                  mensaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font mt-12">
        <div class="container px-5 gap-24 mx-auto">
          <div class="flex flex-wrap w-full mb-12 flex-col items-center text-center">
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Selecciona tu usuario
            </h2>
          </div>
          <div class="flex flex-wrap justify-center -m-4">
            <ul class="flex  w-full justify-center gap-6 ">
              <li>
                <input
                  type="radio"
                  onClick={() => handleFormularioClick("TechRiders")}
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-small"
                  class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:bg-primary-400 peer-checked:border-primary-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Tech Riders</div>
                    <div class="w-full">Good for small websites</div>
                  </div>
                  <svg
                    class="w-5 h-5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  onClick={() => handleFormularioClick("Empresas")}
                  id="hosting-big"
                  name="hosting"
                  value="hosting-big"
                  class="hidden peer"
                />
                <label
                  for="hosting-big"
                  class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:bg-primary-400 peer-checked:border-primary-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Empresas</div>
                    <div class="w-full">Good for large websites</div>
                  </div>
                  <svg
                    class="w-5 h-5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  onClick={() => handleFormularioClick("CentroEducativo")}
                  id="hosting-medium"
                  name="hosting"
                  value="hosting-medium"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-medium"
                  class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:bg-primary-400 peer-checked:border-primary-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg font-semibold">
                      Centro educativo
                    </div>
                    <div class="w-full">Suitable for medium-sized websites</div>
                  </div>
                  <svg
                    class="w-5 h-5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Renderizar el formulario seleccionado */}
      {formulario && (
        <section className="text-gray-600 p-4 body-font mt-12">
          <div className="container  bg-white shadow-sm shadow-[#00000050] px-10 sm:px-5 py-12 mx-auto flex justify-center rounded-xl">
            {formulario === "TechRiders" && <FormTR />}
            {formulario === "Empresas" && <FormEmpresa />}
            {formulario === "CentroEducativo" && <FormCentroEducativo />}
            {/* ... otros formularios ... */}
          </div>
        </section>
      )}
    </>
  );
}
