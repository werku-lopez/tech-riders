import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class NotificacionesAdminPage extends Component{

    state = {
        usuarios:[],
        status: false,
    }

    loadUsuarios=()=>{
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
                usuarios: response.data,     
            })
            console.log(this.state.usuarios)
        })

    }

    componentDidMount=()=>{
        this.loadUsuarios()
    }
    cambiarEstado = (idusuario, estado) => {
        var token = this.props.token;
        console.log(estado);
        if (estado === 0) {
          estado = 1;
        } 
        console.log(estado);
        var request = "api/usuarios/updateEstadoUsuario/"+idusuario +"/" + estado;
        var api = "https://apitechriders.azurewebsites.net/";
        var url = api + request;
        console.log(url);
        axios.put(url, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          console.log(response);
        });
      }
      

    render(){
        return(
            <div>
            <div>
                 <NavLink to={"/vertechriders/"+this.props.token}><button style={{backgroundColor: "green", color:"white", fontWeight:"bold", border: '5px solid green',}}>Ver todos los TechRiders</button></NavLink> 
                 <br />
                 <NavLink to={"/verempresascentro/"+this.props.token}><button style={{backgroundColor: "blue", color:"white", fontWeight:"bold", border: '5px solid blue',}}>Ver todas las empresas/centros</button></NavLink> 
            </div>
            <div style={{textAlign:"center"}}>
                 <h1>NOTIFICACIONES DE ALTA </h1>
             </div>
             {this.state.status == true &&
                this.state.usuarios.map((usuario,index)=>{
                    if(usuario.estado === 0){
                        return(
                            <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px", overflow: "auto"}}>
                                <h1>Nombre: {usuario.nombre} </h1>
                                <h2>Apellidos: {usuario.apellidos}</h2>
                                <h3>Email: {usuario.email} </h3>
                                <h3>Telefono: {usuario.telefono}</h3>
                                <h4>Linkedin: {usuario.linkedin} </h4>
                                <h4>Password: {usuario.password} </h4>
                                <h4>IdProvincia: {usuario.idProvincia}</h4>
                                <div style={{float:"right"}}>
                                <button onClick={() => this.cambiarEstado(usuario.idUsuario, usuario.estado)} style={{backgroundColor: "green", color:"white", fontWeight:"bold", border: '5px solid green'}}>Dar de alta usuario</button>
                                </div>
                            </div>
                        )
                    }
                  
                })
            }
        </div>
        )
    }
}