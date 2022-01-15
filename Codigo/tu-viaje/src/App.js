import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import FlightsProvider from "./context/flights/Provider";
import LoginPage from "./Views/auth/Login";
import RegisterPage from "./Views/auth/Register";
import FlightsList from "./Views/FlightsList/FlightsList";
import Inicio from "./Views/Search";


function App() {
  return (
    <FlightsProvider>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/flights/:id" element={<FlightsList />} />
        </Routes>
      </Router>
    </FlightsProvider>
  );
}

export default App;
