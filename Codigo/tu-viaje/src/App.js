import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Ayuda from './Components/Ayuda';
import Navbar from "./Components/Navbar";
import Inicio from './Components/Inicio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
      <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/login" element={<Ayuda />}/>
      </Routes>
    </Router>
  );
}

export default App;
