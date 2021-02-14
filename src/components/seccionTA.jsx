import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import 'weather-icons/css/weather-icons.css';
import iconUbic from '../img/marcador-de-posicionstreet.svg'

export const seccionTA = ()=> {
  
   // render

  return (
    <div className="_seccionTA">
      <div className="_contenedorSecD">
        <img className="_streetIcon" src={ iconUbic }></img>
        <p className="_art">Artciense Museum</p>
      </div>
    </div>
  )
}

export default seccionTA;
