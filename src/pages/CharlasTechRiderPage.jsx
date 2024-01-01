import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class CharlasTechRiderPage extends Component{
    state = {
        status: false,
        charlastechrider:[]
    }
    //FUNCIONA TODO PERO LE FALTA EL TOKEN PARA QUE HAGA EL METODO 
    loadCharlasTechRider=()=>{
        var idTechRider = this.props.idtechrider
         var request = "api/QueryTools/CharlasTechRider/" +idTechRider;
        var api = "https://apitechriders.azurewebsites.net/" 
        var url = api + request
        console.log(url)
        axios.get(url).then(response=>{
            console.log(response.data)
            this.setState({
                status:true,
                charlastechrider:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadCharlasTechRider()
    }

    render(){
        return(
            <div>
                {this.state.status == true&&
                    this.state.charlastechrider.map((charla,index)=>{
                        return(
                            <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px", overflow: "auto"}}>
                            <h1>Descripcion charla: {charla.descripcionCharla}</h1>
                            <h4>FechaCharla: {charla.fechaCharla}</h4>
                            <h4>EstadoCharla: {charla.estadoCharla}</h4>
                            <h4>Provincia: {charla.provincia}</h4>
                            <h4>Nombre Curso: {charla.nombreCurso}</h4>
                            <h5>Observaciones: {charla.observacionesCharla}</h5>
                            <p>FechaSolicitud: {charla.fechaSolicitudCharla}</p>
                            <h4>Modalidad: {charla.modalidad}</h4>
                            <p>TechRider: {charla.techRider}</p>
                            <p>Email: {charla.email}</p>
                            <p>Telefono: {charla.telefono}</p>
                          </div>
                        )
                    })
                }
            </div>
        )
    }
}