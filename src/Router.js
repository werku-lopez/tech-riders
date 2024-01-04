import React from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPageDesign from './pages/LoginPageDesign';
import EmpresasCentro from './pages/EmpresasCentroPage';
import CentroLayoutPage from './pages/CentroLayoutPage';
import TodasCharlasPage from './pages/TodasCharlasPage';
import InscripcionPage from './pages/InscripcionPage';
import CharlasTechRiderPage from './pages/CharlasTechRiderPage';
import CrearCuentaPage from './pages/CrearCuentaPage';


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
      {/* Otras rutas */}
      <Route path="/todascharlas" element={<TodasCharlasPage />} />
      <Route path="/inscripcion" element={<InscripcionPage />} />
      <Route path="/crear" element={<CentroLayoutPage />} />
      <Route path='/charlastechrider/:idtechrider' element={<CharlasTechRiderElement />} />
    </Routes>
  </LayoutComponent>
</Router>
  );
};

export default AppRouter;