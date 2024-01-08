import React, { Component } from "react";
import logo from "../assets/images/LogoTechRiders.png";
import axios from "axios";

export default class LoginPageDesign extends Component {
  cajaMail = React.createRef();
  cajaPassword = React.createRef();

  state = {
    statusLogueado: false,
    token: "",
    statusVerficado: false
  };

  postLogin = (e) => {
    e.preventDefault();

    var mail = this.cajaMail.current.value;
    var password = this.cajaPassword.current.value;
    console.log(mail, password);

    var usuario = {
      email: mail,
      password: password,
    };
    console.log(usuario);

    var request = "api/Auth/Login";
    var api = "https://apitechriders.azurewebsites.net/";
    var url = api + request;

    axios.post(url, usuario).then((response) => {
      console.log(response.data);
      if (response.data) {
        this.setState({
          statusLogueado: true,
          token: response.data,
          statusVerficado: true
        });
      } else{
        this.setState({
          statusLogueado: false,
          statusVerficado: true
        });
      }
    });
  };
  render() {
    return (
      <>
      <section className="h-full  flex justify-center items-center">
        <div className="container  h-full p-10">
          <div className="  h-full flex-wrap   justify-center  text-neutral-800 ">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-sm shadow-[#00000050] dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                          Inicia sesión en{" "}
                          <span class="text-primary-500">Tech Riders</span>
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
                             type="email"
                             id="email"
                             name="email"
                             ref={this.cajaMail}
                             required
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
                              type="password"
                              id="password"
                              name="password"
                              ref={this.cajaPassword}
                              required
                              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-primary-500 outline-0"
                            />
                          </div>
                          <div>
                            <a class="text-sm text-[#7747ff]" href="#">
                              ¿Olvidaste tu contraseña?
                            </a>
                            
                          </div>
                          <button
                            type="submit"
                            onClick={this.postLogin}
                            class="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
                          >
                            Iniciar sesion
                          </button>
                  
                        </form>
                        <div class="text-sm text-center mt-[1.6rem]">
                          ¿Todavía no tienes cuenta?{" "}
                          <a class="text-sm text-primary-300" href="/crearcuenta">
                            Crea una
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:p-4 p-12 items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-br rounded from-primary-400 via-primary-700 to-primary-900">
                    <div className="p-4  text-white md:mx-6 md:p-12 ">
                      <img src={logo} alt="logo" className="" />
                      <p className="text-sm text-right">By tajamar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {this.state.statusVerficado && (
  <>
    {this.state.statusLogueado ? (
      <p>USUARIO REGISTRADO</p>
    ) : (
      <>
        <p>USUARIO NO REGISTRADO</p>
        <button style={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }}>Inscribirse Como Centro o empresa</button>
      </>
    )}
  </>
)}
      </>
    );
  }
}
