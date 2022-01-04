import React from "react";
import RecomendationNational from "../../Components/Cards/RecomendationNational";
import Recommendation from "../../Components/Cards/Recommendation";
import Consejos from "../../Components/Consejos";
import Hero from "../../Components/Hero";

const Inicio = () => {
  return (
    <div>
      <Hero />
      <Recommendation />
      <RecomendationNational />
      <Consejos />
    </div>
  );
};

export default Inicio;
