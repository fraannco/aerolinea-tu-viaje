import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Pages/Inicio'
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/register" element={<RegisterPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
