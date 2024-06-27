import React from "react";
import {
 
    Link,
  } from "react-router-dom";





const Planes = () => {





  return (

    <div>
      <h3>Planes</h3>
      <p>Elige el plan </p>

      <div>
        <h2>Programacion Básica , Suscripcion Anual </h2>
        <Link to="/suscripcion/2c9380848fc42375018fde17542105b2">Elegir programacion basica</Link>
        
      </div>

      <div>
        <h2>Programacion Pro, Duracion 3 meses </h2>
        <Link to="/suscripcion/2c9380848fc42397018fde16274205fe">Elegir programacion  Pro</Link>

        
      </div>
    </div>
  );
};

export default Planes;
