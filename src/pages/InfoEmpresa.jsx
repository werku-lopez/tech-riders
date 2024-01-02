import React, { Component } from "react";
import imagen from "../assets/images/galery1.jpeg";

export default class InfoEmpresa extends Component {
  render() {
    return (
      <>
        <section class="text-gray-600 body-font ">
          <h2 class="text-gray-900 text-center text-2xl my-4 font-medium title-font ">
            Empresas
          </h2>

          <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col justify-center items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-2 md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
          
  <h1>El programa Tech Riders está diseñado para facilitar a las empresas el "llegar más y mejor" al talento junior del sector tecnológico.</h1>

<p>Con el programa Tech Riders, las empresas tecnológicas pueden impartir, de manera gratuita, charlas técnicas, motivacionales o softskills. Contamos con una red de 70 centros, principalmente centros de formación profesional y algunas universidades.</p>

<p>Durante una charla técnica, un alumn@ puede hacerse una idea clara de las tecnologías que se utilizan en esa empresa. Se puede crear una vinculación entre alumnado y ponente y, por tanto, empresa, que puede resultar muy positiva para todos. Si a eso le sumamos las conexiones que se puedan establecer tras la sesión (a través de LinkedIn o mensajería), mejor que mejor. Y no olvidemos la buena imagen que va a ofrecer la empresa a los estudiantes por el hecho de ofrecerles una formación voluntaria y gratuita.</p>

<p>Nosotros nos encargamos de organizarlo todo. Decidnos qué charla queréis impartir y nosotros os asignaremos un aula compuesta por estudiantes del perfil que os interese.</p>


              <div class="flex justify-center mt-2">
                <button class="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                  ¡Apúntate!
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative ">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={imagen}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
