import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const AppRouter = () => {
  return (
<Router>
  <LayoutComponent>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Otras rutas */}
    </Routes>
  </LayoutComponent>
</Router>
  );
};

export default AppRouter;