import React from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TodasCharlasPage from './pages/TodasCharlasPage';
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
      <Route path="/login" element={<LoginPage />} />
      {/* Otras rutas */}
      <Route path="/todascharlas" element={<TodasCharlasPage />} />
      <Route path="/inscripcion" element={<InscripcionPage />} />
      <Route path='/charlastechrider/:idtechrider' element={<CharlasTechRiderElement />} />
    </Routes>
  </LayoutComponent>
</Router>
  );
};

export default AppRouter;