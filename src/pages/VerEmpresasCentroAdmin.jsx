import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class VerEmpresasCentroAdminPage extends Component{

    state = {
        empresas_centros:[],
        status:false
    }

    loadEmpresasCentros=()=>{
        // var token = this.props.token
        // console.log("HOLATOKEN:" + token)
        var request = "api/Empresascentros";
        var api = "https://apitechriders.azurewebsites.net/";
        var url = api + request;
        axios.get(url).then(response => {
          this.setState({
            status: true,
            empresas_centros: response.data
          });
          console.log(this.state.empresas_centros);
        });
      };

    componentDidMount=()=>{
        this.loadEmpresasCentros()
    }
    render(){
        return(
            <div>
                <div>
                     <NavLink to={"/vertechriders/"+this.props.token}><button style={{backgroundColor: "green", color:"white", fontWeight:"bold", border: '5px solid green',}}>Ver todos los TechRiders</button></NavLink> 
                     <br />
                     <NavLink to={"/notificacionesalta/"+this.props.token}><button style={{backgroundColor: "blue", color:"white", fontWeight:"bold", border: '5px solid blue',}}>Ver Notificaciones de alta</button></NavLink> 
                </div>
                <div style={{textAlign:"center"}}>
                     <h1>LISTADO DE TODAS LAS EMPRESAS/CENTROS</h1>
                 </div>
                 {
                    this.state.status ==true &&(
                        this.state.empresas_centros.map((centro,index)=>{
                            return(
                                <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px", overflow: "auto"}}>
                                    <h1>Nombre: {centro.nombre} </h1>
                                    <h2>Direccion: {centro.direccion}</h2>
                                    <h3>Telefono: {centro.telefono}</h3>
                                    <h4>PersonaContacto: {centro.personaContacto} </h4>
                                    <h4>Cif: {centro.cif} </h4>
                                    <h4>IdProvincia: {centro.idProvincia}</h4>
                                    <h4>RazonSocial:{centro.razonSocial} </h4>
                                    {centro.idTipoEmpresa === 1 ? (
                                    <h4>Tipo: Empresa</h4>
                                     ) : (
                                    <h4>Tipo: Centro/Escuela</h4>
                                    )}
                                    <div style={{float:"right"}}>
                                        <button style={{backgroundColor: "green", color:"white", fontWeight:"bold", border: '5px solid green',}}>Dar de baja empresa/centro</button>
                                    </div>
                                </div>
                            )
                        })
                    )
                 }
            </div>
          
            
        )
    }
}