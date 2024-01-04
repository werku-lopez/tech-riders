import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class InscripcionPage extends Component{
    cajaNombre = React.createRef()
    cajaApellidos = React.createRef()
    cajaEmail = React.createRef()
    cajaTelefono = React.createRef()
    cajaLinkedin = React.createRef()
    cajaPassword = React.createRef()
    CajaRol = React.createRef()
    selectProvincia = React.createRef()

    state = {
        provincias : [],
        statusProvincias: false,
    }

    loadProvincias=()=>{
        var request = "api/provincias";
        var api = "https://apitechriders.azurewebsites.net/" 
         var url = api + request
        axios.get(url).then(response=>{
            this.setState({
                statusProvincias: true,
                provincias: response.data
            })
            console.log(this.state.provincias)
        })

    }
    componentDidMount=()=>{
        this.loadProvincias()
    }

    peticionAltaUser=(e)=>{
        e.preventDefault()
        var idUsuario = 0;  //eL ID se Autoincrementa solo? ;
        var nombre = this.cajaNombre.current.value;
        var apellidos = this.cajaApellidos.current.value
        var email = this.cajaEmail.current.value
        var telefono =  this.cajaTelefono.current.value
        var linkedin = this.cajaLinkedin.current.value
        var password = this.cajaPassword.current.value
        var idRole = 3  //3 porque el rol Techrider es el 3
        var idProvincia = parseInt(this.selectProvincia.current.value)
        var idEmpresaCentro = null
        // var estado  = 0 o 1 ? 
        var estado = 2

        var  newTechRider = {
            idUsuario:idUsuario,
            nombre:nombre,
            apellidos:apellidos,
            email:email,
            telefono:telefono,
            linkedIn:linkedin,
            password:password,
            idRole:idRole,
            idProvincia:idProvincia,
            idEmpresaCentro:idEmpresaCentro,
            estado: estado
        }

        console.log(newTechRider)

        var request = "api/usuarios"  
        var api = "https://apitechriders.azurewebsites.net/" 
        var url = api + request
        console.log(url)
        axios.post(url,newTechRider).then(response=>{
           console.log(response)
        })
    }
    render(){
        return(
            <div>
                <h1>Inscribirse Como TechRider</h1>
                <form style={{ margin: "20px" }}>
                
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" style={{ margin: "30px", border: "1px solid black" }} ref={this.cajaNombre} />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" style={{ margin: "30px", border: "1px solid black" }} ref={this.cajaApellidos} />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Email</label>
            <input type="text" className="form-control" id="Email" style={{ margin: "30px", border: "1px solid black" }} ref={this.cajaEmail} />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Telefono</label>
            <input type="text" className="form-control" id="Telefono" style={{ margin: "30px", border: "1px solid black" }} ref={this.cajaTelefono} />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Linkedin</label>
            <input type="text" className="form-control" id="Linkedin" style={{ margin: "30px", border: "1px solid black" }} ref={this.cajaLinkedin} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" style={{ margin: "30px", border: "1px solid black" }} ref={this.cajaPassword} />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Rol</label>
            <input type="text" className="form-control" id="rol" style={{ margin: "30px", border: "1px solid black" }}  value="TechRider" readOnly ref={this.CajaRol} />
        </div>

        <div className="form-group">
            <label htmlFor="serie">Provincia:</label>
            <select className="form-control" id="provincia" ref={this.selectProvincia} style={{ margin: "30px", border: "1px solid black" }} >
                {
                    this.state.statusProvincias== true&&
                    (
                        this.state.provincias.map((provincia,index)=>{
                            return(
                                <option key={index} value={provincia.idProvincia}>
                                    {provincia.nombreProvincia}
                                </option>
                            )
                        })
                    )
                }
            
            </select>
        </div>

         {/* FALTA  COMO HACER LO DE IDEmpresaCentro y estado */}
        <h5>El admin revisara su solicitud y en breves momentos sera aceptada o denegada</h5>
        <button onClick={this.peticionAltaUser} className="mt-4" style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}>Solicitar Darse de alta</button>
        </form>
            </div>
        )
    }
}