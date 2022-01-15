import {React, useContext} from "react";
import RecomendationNational from "../../Components/Cards/RecomendationNational";
import Recommendation from "../../Components/Cards/Recommendation";
import FlightsContext from "../../Components/context/flights";
/* import Consejos from "../../Components/Consejos";
import Footer from "../../Components/Footer"; */
import Search from "./components/Search";

const Inicio = () => {
  const myContext = useContext(FlightsContext);
  console.log("asdfasd",myContext)
  return (
    <div>
      <Search />
      <Recommendation />
      <RecomendationNational />
{/*       <Consejos />
      <Footer /> */}
    </div>
  );
};

export default Inicio;
