import React from "react";
import { Component } from "react";
import axios from "axios";
import heroImg from "../assets/images/HeroImg.jpeg";
import logo from "../assets/images/LogoTechRiders.png";
import logoTajamar from "../assets/images/LogoTajamar.png";
import galery1 from "../assets/images/galery1.jpeg";
import galery2 from "../assets/images/galery2.jpeg";
import galery3 from "../assets/images/galery3.jpeg";
import galery4 from "../assets/images/galery4.jpeg";
import galery5 from "../assets/images/galery5.jpeg";
import galery6 from "../assets/images/galery6.jpg";

import {
  User,
  Bookmark,
  Message,
  Pantalla,
  Presencial,
} from "../assets/icons/icons";

export default class HomePage extends Component {
  state = {
    opiniones: [],
    status: false,
  };

  loadOpiniones = () => {
    var request = "api/valoracionescharlas";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.setState({
          status: true,
          opiniones: response.data,
        });
        console.log(this.state.opiniones);
      });
  };
  componentDidMount = () => {
    this.loadOpiniones();
  };
  render() {
    return (
      <>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font text-7xl  mb-4 font-bold text-gray-900">
                Tech Riders
              </h1>

              <p class="mb-8 leading-relaxed text-xl ">
                Conectando Futuros: Charlas Tecnológicas para la Excelencia en
                la Formación Profesional.
              </p>
              <div class="flex justify-center items-center">
                <a
                  href="/login"
                  class="shrink-0 text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
                >
                  Log in
                </a>
                <a href="/origen" class="ml-4 shrink-0 inline-flex text-gray-700 border-2 border-primary-500 bg-neutral-50  py-2 px-6 focus:outline-none hover:bg-neutral-100 rounded text-lg">
                  Sobre nosotros
                </a>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative ">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={heroImg}
              />
              <img
                class="object-cover object-center rounded absolute -bottom-12 -right-12 [filter:_invert(50%);] "
                alt="hero"
                src={logoTajamar}
              />
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 gap-24 mx-auto">
            <div class="flex flex-wrap w-full mb-12 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                ¿Quién eres?
              </h1>
            </div>
            <div class="flex flex-wrap justify-center -m-4 mb-6">
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <a href="/infotr">
                  <div class="service-card   cursor-pointer snap-start shrink-0 py-6 px-6 bg-white flex flex-col gap-8 items-between transition-all duration-300 rounded shadow-sm shadow-[#00000050] group hover:bg-primary-500">
                    <div class="flex gap-2 flex-col">
                      <h3 class="font-bold text-2xl group-hover:text-white text-black/80">
                        Particular
                      </h3>
                      <p class="text-gray-800 group-hover:text-white text-sm">
                        Si eres un/a profesional de la tecnología y quieres
                        impartir una charla técnica o motivacional en un centro
                        educativo.
                      </p>
                    </div>
                    <p class="text-5xl font-bold self-end text-primary-500 group-hover:text-primary-600">
                      1
                    </p>
                  </div>
                </a>
              </div>
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <a href="/infoempresa">
                  <div class="service-card   cursor-pointer snap-start shrink-0 py-6 px-6 bg-white flex flex-col gap-8 items-between transition-all duration-300 rounded shadow-sm shadow-[#00000050] group hover:bg-primary-500">
                    <div class="flex gap-2 flex-col">
                      <h3 class="font-bold text-2xl group-hover:text-white text-black/80">
                        Empresa
                      </h3>
                      <p class="text-gray-800 group-hover:text-white text-sm">
                        Si sois una empresa tecnológica y queréis impartir una
                        charla técnica o motivacional en un centro educativo o
                        de formación.
                      </p>
                    </div>
                    <p class="text-5xl font-bold self-end text-primary-500 group-hover:text-primary-600">
                      2
                    </p>
                  </div>
                </a>
              </div>
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <a href="/infocentro">
                  <div class="service-card   cursor-pointer snap-start shrink-0 py-6 px-6 bg-white flex flex-col gap-8 items-between transition-all duration-300 rounded shadow-sm shadow-[#00000050] group hover:bg-primary-500">
                    <div class="flex gap-2 flex-col">
                      <h3 class="font-bold text-2xl group-hover:text-white text-black/80">
                        Centro formador
                      </h3>
                      <p class="text-gray-800 group-hover:text-white text-sm">
                        Si eres un centro de formación y quieres solicitar una
                        charla técnica, motivacional o softskills para tus
                        estudiantes de la rama de tecnología.
                      </p>
                    </div>
                    <p class="text-5xl font-bold self-end text-primary-500 group-hover:text-primary-600">
                      3
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 gap-24 mx-auto">
            <div class="flex flex-wrap w-full mb-12 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Charlas
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Descubre los beneficios de añadir esta dinámica a tu centro.
              </p>
            </div>
            <div class="flex flex-wrap justify-center -m-4">
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <div class="shadow-sm shadow-[#00000050] bg-neutral-50 min-h-[280px]  p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4">
                    <User className="text-primary-500" />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Inspirar y motivar
                  </h2>
                  <p class="leading-relaxed text-base">
                    Inspiraramos a los estudiantes al mostrarles casos de éxito,
                    historias de superación y la emocionante gama de
                    posibilidades que ofrece el mundo tecnológico.{" "}
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <div class="shadow-sm shadow-[#00000050] bg-neutral-50 min-h-[280px] p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4">
                    <Bookmark className="text-primary-500" />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Demostrar aplicaciones prácticas
                  </h2>
                  <p class="leading-relaxed text-base">
                    A través de ejemplos y demostraciones prácticas, los
                    oradores pueden ilustrar la aplicación real de conceptos
                    tecnológicos.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <div class="shadow-sm shadow-[#00000050] bg-neutral-50 min-h-[280px] p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4">
                    <Message className="" />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Conexiones Profesionales
                  </h2>
                  <p class="leading-relaxed text-base">
                    Dar charlas en centros de formación profesional brinda la
                    oportunidad de establecer conexiones con estudiantes,
                    profesores y otros profesionales del sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-12 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Modalidades
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Nos adaptamos a las necesidades de tu centro
              </p>
            </div>
            <div class="flex flex-wrap justify-center -m-4">
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <div class="shadow-sm shadow-[#00000050] bg-neutral-50 min-h-[280px] p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4">
                    <Presencial />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Presencial
                  </h2>
                  <p class="leading-relaxed text-base">
                    Inspiraramos a los estudiantes al mostrarles casos de éxito,
                    historias de superación y la emocionante gama de
                    posibilidades que ofrece el mundo tecnológico.{" "}
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2  p-4">
                <div class="shadow-sm shadow-[#00000050] bg-neutral-50 min-h-[280px] p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4">
                    <Pantalla />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Híbrido
                  </h2>
                  <p class="leading-relaxed text-base">
                    Inspiraramos a los estudiantes al mostrarles casos de éxito,
                    historias de superación y la emocionante gama de
                    posibilidades que ofrece el mundo tecnológico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
          <h2 class="text-3xl  font-medium  title-font text-primary-900 mb-2 text-center">
                Nuestros resultados
              </h2>
              <p class="lg:w-2/3 mx-auto text-center mb-4 leading-relaxed text-base">
            ¡Mira todo lo que hemos conseguido!
          </p>
          <div class="flex flex-col sm:flex-row -m-4">
          {this.state.status === true &&
              this.state.opiniones.map((opinion, index) => {
                return (<>
             
                <div class="p-4 sm:w-1/2  w-full">
                  <div class="h-full relative rounded bg-primary-100 p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-primary-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">
                    {opinion.comentario}
                    </p>
                    <span class="text-2xl absolute bottom-4 right-4 block text-right font-bold self-end text-primary-500 group-hover:text-primary-600">{opinion.valoracion}/5</span>
                  </div>
                </div>
              </>)})
              }
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 gap-12 mx-auto flex flex-wrap">
            <div class="flex flex-wrap sm:flex-row flex-col  md:-m-2 -m-1">
              <div class="flex flex-wrap w-full sm:w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full rounded object-cover h-full object-center block"
                    src={galery1}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full rounded object-cover h-full object-center block"
                    src={galery4}
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full rounded h-full object-cover object-center block"
                    src={galery2}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-full sm:w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full rounded h-full object-cover object-center block"
                    src={galery3}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full rounded object-cover h-full object-center block"
                    src={galery5}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full rounded object-cover h-full object-center block"
                    src={galery6}
                  />
                </div>
              </div>
            </div>
            <div class="flex w-full my-6  flex-col items-center text-center gap-4 shadow-sm shadow-[#00000050] bg-neutral-50 p-8 rounded">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900  ">
                ¿A qué estas esperando?
              </h1>
              <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                No te pierdas la oportunidad de sumergirte en el emocionante
                universo de la tecnología. ¡Explora las charlas disponibles y si
                te gusta alguna no dudes en solicitarla. Aprender, inspirarnos y
                construir el futuro juntos es posible
              </p>
              <a
                href="/crearcuenta"
                class="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
              >
                ¡Apúntate ahora!
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}
