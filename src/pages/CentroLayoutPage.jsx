import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CentroLayoutPage() {
  const [selectedTab, setSelectedTab] = useState("solicitudes-activas");
  const [solicitudesActivas, setSolicitudesActivas] = useState([]);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  const loadSolicitudes = (token) => {
    var request = "api/querytools/charlasempresas";
    var url = "https://apitechriders.azurewebsites.net/" + request;

    var config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(url, config).then((response) => {
      //setSolicitudes(response.data);
      const fechaActual = new Date();
      const fecha_hoy = fechaActual.toISOString().split(".")[0];

      var solicitudesActivas = response.data.filter((solicitud) => {
        return solicitud.fechaCharla >= fecha_hoy;
      });
      setSolicitudesActivas(solicitudesActivas);
      /*console.log(fecha_hoy);
      console.log(solicitudesActivas);*/
    });
  };

  const getTokenUser = () => {
    var requestLogin = "api/auth/login";
    var urlLogin = "https://apitechriders.azurewebsites.net/" + requestLogin;

    var username = "admin@gmail.com";
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
      loadSolicitudes(response.data.response);
    });
  };

  useEffect(() => {
    getTokenUser();
  }, []);

  return (
    <div>
      {/* layout para mostrar las charlas solicitadas por el centro */}
      <div className="text-center flex justify-center mb-5">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex justify-between  -mb-px text-sm font-medium text-center"
            id="tab"
            data-tabs-toggle="#tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "solicitudes-activas" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("solicitudes-activas")}
                type="button"
                role="tab"
                aria-controls="solicitudes-activas"
                aria-selected={selectedTab === "solicitudes-activas"}
              >
                Solicitudes activas
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  selectedTab === "todas-las-solicitudes"
                    ? "border-blue-500"
                    : ""
                }`}
                onClick={() => handleTabClick("todas-las-solicitudes")}
                type="button"
                role="tab"
                aria-controls="todas-las-solicitudes"
                aria-selected={selectedTab === "todas-las-solicitudes"}
              >
                Todas las solicitudes
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div id="tab-content">
        <div
          className={`${
            selectedTab === "solicitudes-activas" ? "block" : "hidden"
          } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
          id="solicitudes-activas"
          role="tabpanel"
          aria-labelledby="solicitudes-activas"
        >
          <div className="grid grid-cols-1 gap-4 p-2">
            <div className="col-span-1 shadow-lg">
              <div className="flex flex-wrap gap-4">
                <div className="flex w-32">
                  <img
                    width="250px"
                    height="250px"
                    src="https://techriders.tajamar.es/wp-content/uploads/2023/04/motv-charla-683x1024.jpeg"
                    alt="charla1"
                  />
                </div>
                <div className="flex-1 w-32">
                  <p>
                    Las softskills son altamente valoradas por los empleadores,
                    y pueden mejorar el rendimiento y la productividad en el
                    entorno laboral. Liderazgo y gestión de equipos, creatividad
                    e innovación, negociación, capacidad de colaboración y de
                    trabajo en equipo, adaptabilidad y flexibilidad,
                    productividad y gestión del tiempo.
                  </p>
                </div>
                <div>
                  {
                    solicitudesActivas.map((solicitud)=>{
                      return (
                        <p key={solicitud.id}>{solicitud.id}</p>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            selectedTab === "todas-las-solicitudes" ? "block" : "hidden"
          } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
          id="todas-las-solicitudes"
          role="tabpanel"
          aria-labelledby="todas-las-solicitudes"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}
