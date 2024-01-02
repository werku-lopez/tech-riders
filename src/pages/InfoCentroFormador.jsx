import React, { Component } from "react";
import imagen from "../assets/images/galery1.jpeg";

export default class InfoCentroEmpresa extends Component {
  render() {
    return (
      <>
        <section class="text-gray-600 body-font ">
          <h2 class="text-gray-900 text-center text-2xl my-4 font-medium title-font ">
            Centro formadores
          </h2>

          <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col justify-center items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-2 md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
              <p className="">
                ¿Te gustaría que tus alumn@s de FP -ASIR, DAM, DAW o STI-
                recibieran una charla técnica, motivacional o sobre softskills
                impartida por un profesional de una empresa tecnológica puntera?
                A medida de tus necesidades.
              </p>

              <p>
                Si todavía no has solicitado una, te sugerimos posibles
                temáticas. Todas son charlas de un nivel de iniciación; para
                conocer la tecnología; saber qué se puede hacer con cada una de
                ellas y por qué la utilizan las empresas. Si quisierais un nivel
                más avanzado, bastaría con que nos lo indicaseis.
              </p>

              <ul>
                <li>Duración: 1,5 h. - 2 h. aproximadamente.</li>
                <li>Cómo: Presencial o virtual.</li>
                <li>
                  Cuándo: En una fecha y horario que os vengan bien durante este
                  año académico y se adapte al ritmo de vuestro curso.
                </li>
                <li>Precio: Gratis</li>
              </ul>

              <p>
                Nosotros nos encargaremos de organizar la charla con los
                profesionales de las empresas. Cuanto antes puedas solicitarla
                mejor, dispondremos así de mayores opciones para organizarla en
                la fecha y horario que más te convengan.
              </p>

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
