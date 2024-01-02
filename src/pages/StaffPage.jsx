import React, { Component } from "react";
import logo from "../assets/images/LogoTechRiders.png";
import Sergio from "../assets/images/galery6.jpg";
import Marta from "../assets/images/marta_tech_riders_Marta-Valdes-Azcarra-1024x768.jpg";
import Borja from "../assets/images/borja.jpg";

import { LinkedIn, X } from "../assets/icons/icons";

export default class StaffPage extends Component {
  render() {
    return (
      <>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                Nuestro equipo
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Los creadores de esta iniciativa.
              </p>
            </div>
            <div class="flex flex-wrap justify-center -m-4">
              <div class="p-4 lg:w-1/2">
                <div class="h-full shadow-sm shadow-[#00000050] bg-neutral-50 p-6 rounded-xl flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Sergio}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Sergio Hierro Cinos
                    </h2>
                    <h3 class="text-primary-900 mb-3">Lead</h3>
                    <p class="mb-4">
                      Software Engineering TC | Consultant Full-Stack Developer
                      | Career Adviser Ambassador
                    </p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2">
                <div class="h-full shadow-sm shadow-[#00000050] bg-neutral-50 p-6 rounded-xl flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Marta}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Sergio Hierro Cinos
                    </h2>
                    <h3 class="text-primary-900 mb-3">Lead</h3>
                    <p class="mb-4">
                      Software Engineering TC | Consultant Full-Stack Developer
                      | Career Adviser Ambassador
                    </p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2">
                <div class="h-full shadow-sm shadow-[#00000050] bg-neutral-50 p-6 rounded-xl flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Borja}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Sergio Hierro Cinos
                    </h2>
                    <h3 class="text-primary-900 mb-3">Lead</h3>
                    <p class="mb-4">
                      Software Engineering TC | Consultant Full-Stack Developer
                      | Career Adviser Ambassador
                    </p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Young Riders
              </h2>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Nada de esto sería posible sin la ayuda de nuestros jóvenes Tech
                Riders.
              </p>
            </div>
            <div class="flex flex-wrap justify-center -m-2">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center shadow-sm shadow-[#00000050] p-4 bg-neutral-50 rounded-lg">
                  <img
                    alt="team"
                    class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                    src={Borja}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Nombre Apellido
                    </h2>
                    <p class="text-gray-500 mb-4">Lo que hace</p>
                    <span class="inline-flex gap-2">
                      <a class="">
                        <X />
                      </a>
                      <a class="  ">
                        <LinkedIn />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
