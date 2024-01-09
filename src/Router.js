import React from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPageDesign from './pages/LoginPageDesign';
import LoginPage from './pages/LoginPage';
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
import SolicitarCharlas from './pages/SolicitarCharlas';

import VerTechRidersAdminPage from './pages/VerTechRidersAdmin';
import VerEmpresasCentroAdminPage from './pages/VerEmpresasCentroAdmin';
import NotificacionesAdminPage from './pages/NotificacionesAdminPage';

const AppRouter = () => {
  function CharlasTechRiderElement() {
    var {idtechrider} = useParams()
    return<CharlasTechRiderPage idtechrider = {idtechrider}/>
}

function VerTechRidersAdminElement() {
  var {token} = useParams()
  return<VerTechRidersAdminPage token = {token}/>
}
function VerEmpresasCentroAdminElement() {
  var {token} = useParams()
  return<VerEmpresasCentroAdminPage token = {token}/>
}
function NotificacionesAdminElement() {
  var {token} = useParams()
  return<NotificacionesAdminPage token = {token}/>
}
  return (

<Router>
  <LayoutComponent>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/crearcuenta" element={<CrearCuentaPage />} />

      <Route path="/contacto" element={<Contactpage />} />
      <Route path="/todascharlas" element={<TodasCharlasPage />} />
      <Route path="/todasempresas" element={<TodasEmpresasPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/origen" element={<OrigenTR />} />
      <Route path="/centro" element={<CentroLayoutPage />} />

      <Route path="/infocentro" element={<InfoCentroFormador />} />
      <Route path="/infotr" element={<InfoTR />} />
      <Route path="/infoempresa" element={<InfoEmpresa />} />


      {/* Otras rutas */}
      <Route path="/inscripcion" element={<InscripcionPage />} />
      <Route path="/crear" element={<CentroLayoutPage />} />

      {/* TECHRIDER */}
      <Route path='/charlastechrider/:idtechrider' element={<CharlasTechRiderElement />} />
      <Route path="/inscripcion/empresacentro" element={<EmpresasCentro />} />
      <Route path="/centrolayoutpage/*" element={<CentroLayoutPage />}/>
      <Route path="/solicitudCharla/" element={<SolicitarCharlas />} />

      {/* ADMIN */}
      <Route path='/vertechriders/:token' element={<VerTechRidersAdminElement />} />
      <Route path='/verempresascentro/:token' element={<VerEmpresasCentroAdminElement />} />
      <Route path='/notificacionesalta/:token' element={<NotificacionesAdminElement />} />
    </Routes>
  </LayoutComponent>
</Router>
  );
};

export default AppRouter;