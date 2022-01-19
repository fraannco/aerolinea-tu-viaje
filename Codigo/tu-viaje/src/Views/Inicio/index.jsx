import {React} from "react";
import RecomendationNational from "../../Components/Cards/RecomendationNational";
import Recommendation from "../../Components/Cards/Recommendation";
import Consejos from "../../Components/Consejos";
import Footer from "../../Components/Footer";
/* import Consejos from "../../Components/Consejos";
import Footer from "../../Components/Footer"; */
import Search from "./components/Search";

const Inicio = () => {
  return (
    <div>
      <Search />
      <Recommendation />
      <RecomendationNational />
      <Consejos />
      <Footer />
    </div>
  );
};

export default Inicio;
