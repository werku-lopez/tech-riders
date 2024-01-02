import React from "react";
import { Component } from "react";
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
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                  Log in
                </button>
                <button class="ml-4 inline-flex text-gray-700 border-2 border-primary-500 bg-neutral-50  py-2 px-6 focus:outline-none hover:bg-neutral-100 rounded text-lg">
                  Sobre nosotros
                </button>
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
              <button class="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                ¡Apuntate ahora!
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
