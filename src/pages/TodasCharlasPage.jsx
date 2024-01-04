import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


export default class TodasCharlasPage extends Component {
    
  state = {
    charlas: [],
    status: false,
  };

  loadCharlas =()=>{
    var request = "api/charlas";
    var api = "https://apitechriders.azurewebsites.net/" 
    var url = api + request
    console.log(url)
    axios.get(url).then(response =>{
        this.setState({
            status:true,
            charlas: response.data
        })
        console.log(this.state.charlas)
    })
  }
 componentDidMount=()=>{
        this.loadCharlas()
    }
    render() {
        return (
          <div>
            {this.state.status === true &&
              this.state.charlas.map((charla, index) => {
                return (
                    <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px", overflow: "auto"}}>
                    <h1>Descripcion charla: {charla.descripcion}</h1>
                    <h4>FechaCharla: {charla.fechaCharla}</h4>
                    <h5>Observaciones: {charla.observaciones}</h5>
                    <p>FechaSolicitud: {charla.fechaSolicitud}</p>
                    <h3>Turno: {charla.turno}</h3>
                    <h4>Modalidad: {charla.modalidad}</h4>
                    <p>Linkedin: {charla.acreditacionLinkedIn}</p>
                    <div style={{float:"right"}}>
                       <NavLink to={"/login"}><button style={{backgroundColor: "green", color:"white", fontWeight:"bold", border: '5px solid green',}}>Solicitar Charla</button></NavLink> 
                    </div>
                  </div>
                );
              })}
          </div>
        );
      }
    }
