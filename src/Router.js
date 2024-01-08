import React from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPageDesign from './pages/LoginPageDesign';
import Contactpage from './pages/ContactPage';
import StaffPage from './pages/StaffPage';
import OrigenTR from './pages/OrigenTR';

import InfoCentroFormador from './pages/InfoCentroFormador';
import InfoTR from './pages/InfoTR';
import InfoEmpresa from './pages/InfoEmpresa';

import CrearCuentaPage from './pages/CrearCuentaPage'; 

import EmpresasCentro from './pages/EmpresasCentroPage';
import CentroLayoutPage from './pages/CentroLayoutPage';
import TodasCharlasPage from './pages/TodasCharlasPage';
import TodasEmpresasPage from './pages/TodasEmpresasPage';

import InscripcionPage from './pages/InscripcionPage';
import CharlasTechRiderPage from './pages/CharlasTechRiderPage';

const AppRouter = () => {
  function CharlasTechRiderElement() {
    var {idtechrider} = useParams()
    return<CharlasTechRiderPage idtechrider = {idtechrider}/>
}
  return (

<Router>
  <LayoutComponent>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPageDesign />} />
      <Route path="/e" element={<EmpresasCentro />} />
      <Route path="/crearcuenta" element={<CrearCuentaPage />} />

      <Route path="/contacto" element={<Contactpage />} />
      <Route path="/todascharlas" element={<TodasCharlasPage />} />
      <Route path="/todasempresas" element={<TodasEmpresasPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/origen" element={<OrigenTR />} />

      <Route path="/infocentro" element={<InfoCentroFormador />} />
      <Route path="/infotr" element={<InfoTR />} />
      <Route path="/infoempresa" element={<InfoEmpresa />} />


      {/* Otras rutas */}
      <Route path="/inscripcion" element={<InscripcionPage />} />
      <Route path='/charlastechrider/:idtechrider' element={<CharlasTechRiderElement />} />
    </Routes>
  </LayoutComponent>
</Router>
  );
};

export default AppRouter;