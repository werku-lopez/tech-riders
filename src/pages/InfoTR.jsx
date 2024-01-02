import React, { Component } from "react";
import imagen from "../assets/images/galery1.jpeg";

export default class InfoTR extends Component {
  render() {
    return (
      <>
        <section class="text-gray-600 body-font ">
          <h2 class="text-gray-900 text-center text-2xl my-4 font-medium title-font ">
            Tech Riders
          </h2>

          <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col justify-center items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-2 md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
              <h1>
                Contagia tu pasión por la tecnología. ¡Ayuda a los que empiezan!
                Devuelve parte de lo que has recibido. Conviértete en Tech
                Rider.
              </h1>

              <p>
                Estas son las charlas de 1 hora o 1,5 horas (presenciales o
                virtuales) que puedes impartir a los chic@s que empiezan en el
                mundo de la tecnología, tanto de FP, como de grado
                universitario.
              </p>

              <p>
                Puedes impartir la charla que tú quieras, de aquellas cosas o
                temas con los que trabajes habitualmente. Nosotros nos
                encargamos de gestionarlo todo (buscamos fecha, hora y lugar -en
                el caso de ser presencial- que os vengan bien a las partes).
              </p>

              <h2>TÉCNICAS (sistemas, desarrollo, redes)</h2>
              <p>
                Ejemplos: Programación Low Code / Kubernetes / IA / Azure / AWS
                / GCP / Angular, React, Vue / JavaScript / .NET Core / Java /
                Windows Server / Linux / Blockchain / Ciberseguridad / IaC /
                Redes definidas por software / Best Practices PO, PM, TL, FRONT,
                BACK, QA, etc.
              </p>

              <h2>MOTIVACIONALES</h2>
              <p>
                Sesión para compartir experiencia de emplead@, carrera
                profesional, obstáculos encontrados y cómo se han superado, cómo
                ayuda determinada formación al crecimiento personal, decisiones
                que marcan el perfil laboral, etc. En definitiva, orientación
                para las personas que llevan poco tiempo estudiando tecnología y
                todavía no tienen claro próximos pasos.
              </p>

              <h2>SOFT SKILLS</h2>
              <p>
                Liderazgo y gestión de equipos, creatividad e innovación,
                negociación, capacidad de colaboración y de trabajo en equipo,
                adaptabilidad y flexibilidad, productividad y gestión del
                tiempo.
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
