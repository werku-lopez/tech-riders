import React, { Component } from "react";

export default class FormTR extends Component {
  render() {
    return (
      <>
        <div class="w-full  relative flex flex-col p-4 rounded-md text-black bg-white">
          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Crear cuenta como <span class="text-primary-500">Tech Riders</span>
          </div>

          <form class="flex flex-col gap-3">
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-primary-500 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-primary-500 outline-0"
              />
            </div>

            <button
              type="submit"
              class="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
            >
              Log in
            </button>
          </form>
        </div>
      </>
    );
  }
}
