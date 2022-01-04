import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Pages/Inicio'
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
