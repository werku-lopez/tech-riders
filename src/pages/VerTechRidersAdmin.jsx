import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class VerTechRidersAdminPage extends Component{

    state = {
        usuarios : [],
        status: false,
    }

    loadTechriders=()=>{
        var token = this.props.token
        console.log("HOLATOKEN:" + token)
        var request = "api/usuarios";
        var api = "https://apitechriders.azurewebsites.net/" 
         var url = api + request
        axios.get(url,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then(response=>{
            this.setState({
                status: true,
                usuarios: response.data
            })
            console.log(this.state.usuarios)
        })

    }

    componentDidMount=()=>{
        this.loadTechriders()
    }

    render(){
        return(
           <div>
            {this.state.status == true &&
                this.state.usuarios.map((usuario,index)=>{
                    if(usuario.idRole === 3){
                        return(
                            <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px", overflow: "auto"}}>
                                <h1>Nombre: {usuario.nombre} </h1>
                                <h2>Apellidos: {usuario.apellidos}</h2>
                                <h3>Email: {usuario.email} </h3>
                                <h3>Telefono: {usuario.telefono}</h3>
                                <h4>Linkedin: {usuario.linkedin} </h4>
                                <h4>Password: {usuario.password} </h4>
                                <h4>IdProvincia: {usuario.idProvincia}</h4>
                                <h4>Estado:{usuario.estado} </h4>
                            </div>
                        )
                    }
                    return null;
                })
            }
           </div>
        )
    }
    
}