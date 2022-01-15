import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import FlightsProvider from "./Components/context/flights/FlightsProvider";
import Navbar from './Components/Navbar';
import SearchFlights from './Pages/SearchFlights';
import LoginPage from "./Views/auth/Login";
import RegisterPage from "./Views/auth/Register";
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
          <Route exact path="/search" element={<SearchFlights />} />
        </Routes>
      </Router>
    </FlightsProvider>
  );
}

export default App;
