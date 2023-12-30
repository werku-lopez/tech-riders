import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TodasCharlasPage from './pages/TodasCharlasPage';
import InscripcionPage from './pages/InscripcionPage';

const AppRouter = () => {
  return (
<Router>
  <LayoutComponent>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Otras rutas */}
      <Route path="/todascharlas" element={<TodasCharlasPage />} />
      <Route path="/inscripcion" element={<InscripcionPage />} />
    </Routes>
  </LayoutComponent>
</Router>
  );
};

export default AppRouter;