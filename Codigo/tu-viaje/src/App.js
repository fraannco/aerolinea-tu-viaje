import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import FlightsProvider from "./context/flights/Provider";
import AgendarCita from "./Views/AgendarCita/AgencarCita";
import SeleccionAsientos from "./Views/Asientos";
import LoginPage from "./Views/auth/Login";
import RegisterPage from "./Views/auth/Register";
import Contacto from "./Views/Ayuda";
import { SearchFlights } from "./Views/FlightsList";
import Inicio from "./Views/Inicio";
import LibroReclamos from "./Views/LibroReclamos/LibroReclamos";
import Misvuelos from "./Views/MisVuelos/MisVuelos";
import Pago from "./Views/Pago/Index";
import Perfil from "./Views/Perfil/Perfil";


function App() {
  return (
    <FlightsProvider>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mis-vuelos" element={<Misvuelos />} />
          <Route path="/mi-perfil" element={<Perfil />} />
          <Route path="/agendar-cita" element={<AgendarCita />} />
          <Route path="/libro-reclamos" element={<LibroReclamos />} />
          <Route path="/ida/:id" element={<SearchFlights />} />
          <Route path="/solo-ida/:id" element={<SearchFlights />} />
          <Route path="/vuelta/:id" element={<SearchFlights />} />
          <Route path="/asientos_ida/:cod_vuel" element={<SeleccionAsientos />} />
          <Route path="/asientos_vuelta/:cod_vuel" element={<SeleccionAsientos />} />
          <Route path="/ayuda" element={<Contacto />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
      </Router>
    </FlightsProvider>
  );
}

export default App;
