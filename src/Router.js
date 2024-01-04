import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EmpresasCentro from './pages/EmpresasCentroPage';
import CentroLayoutPage from './pages/CentroLayoutPage';

const AppRouter = () => {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/empresas-centro-inscripcion" element={<EmpresasCentro />} />
          <Route path='/centro-layout' element={<CentroLayoutPage />} />
          {/* Otras rutas */}
        </Routes>
      </LayoutComponent>
    </Router>
  );
};

export default AppRouter;