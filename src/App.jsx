import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import LoginPage from './windows/LoginPage.jsx';
import RegisterPage from './windows/RegisterPage.jsx';
import RecoverPage from './windows/RecoverPage.jsx';
import PeliculasIndexPage from './windows/PeliculasIndexPage.jsx';
import PeliculasReservaPage from './windows/PeliculasReservaPage.jsx';
import SalaReservaPage from './windows/SalaReservaPage.jsx';
import PeliculasItemPage from './windows/PeliculasItemPage.jsx';
import SalaIndexPage from './windows/SalaIndexPage.jsx';
import SalaItemPage from "./windows/SalaItemPage.jsx";




const App = () => {

  
  return (


      <Routes>
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover" element={<RecoverPage />} />
        <Route path="/peliculas" element={<PeliculasIndexPage />} />
        <Route path="/reserva" element={<PeliculasReservaPage />} />
        <Route path="/reserva2" element={<SalaReservaPage />} />
        <Route path="/peliculas/:path" element={<PeliculasItemPage />} />
        <Route path="/salas" element={<SalaIndexPage />} />
        <Route path="/salas/:path" element={<SalaItemPage />} />
       
      </Routes>

  );
};

export default App;