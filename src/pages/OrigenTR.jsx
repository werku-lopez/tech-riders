import React from "react";
import { Component } from "react";
import axios from "axios";
import heroImg from "../assets/images/HeroImg.jpeg";
import logo from "../assets/images/LogoTechRiders.png";


import {
  Code, Post, Video
} from "../assets/icons/icons";

export default class OriginTR extends Component {

  render() {
    return (
      <>
<section class="text-gray-600 body-font">
  <div class="container px-5 pt-12 mx-auto">
    <div class="flex flex-col  w-full mb-2">
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">Origen</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed mb-2 text-base">En el año 2013 un grupo de alumnos del máster de sistemas de Tajamar creó el Tech Club inspirándose en los centros DOTNET universitarios. La FP reclamaba así su sitio.</p>
      <p class="lg:w-2/3 mx-auto leading-relaxed mb-2 text-base">El objetivo del Club: Generar y compartir conocimiento en torno a la tecnología, Networking + oportunidades laborales, visibilidad del trabajo de los estudiantes.</p>
      <p class="lg:w-2/3 mx-auto leading-relaxed mb-2 text-base">Ya desde ese momento organizamos las primeras charlas técnicas impartidas por profesionales del sector tecnológico. Los post y videotutoriales no tardaron en llegar.</p>
      <h1 class="sm:text-3xl text-2xl text-center  font-medium title-font mb-4 mt-8 text-gray-900">Este año académico,
2022-2023.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed mb-2 text-center text-base">Nuestros datos hablan por sí solos.</p>
     
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div class="border-2 border-primary-200 flex flex-col items-center justify-stretch bg-white px-4 py-6 rounded-lg">
          <Post className="text-primary-500 bg-primary-200 rounded p-2 mb-4 w-16 h-16"/>
          
          <h2 class="title-font font-medium text-3xl text-primary-900">+39</h2>
          <p class="leading-relaxed">Charlas</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div class="border-2 border-primary-200 flex flex-col items-center bg-white px-4 py-6 rounded-lg">
        <Code className="text-primary-500 bg-primary-200 rounded p-2 mb-4 w-16 h-16"/>
          <h2 class="title-font font-medium text-3xl text-primary-900">+1.400</h2>
          <p class="leading-relaxed">Post técnicos</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div class="border-2 border-primary-200 flex flex-col items-center bg-white px-4 py-6 rounded-lg">
          <Video className="text-primary-500 bg-primary-200 rounded p-2 mb-4 w-16 h-16"/>
          <h2 class="title-font font-medium text-3xl text-primary-900">+550</h2>
          <p class="leading-relaxed">Videotutoriales</p>
        </div>
      </div>
     
    </div>
  </div>
</section>
      </>
    );
  }
}