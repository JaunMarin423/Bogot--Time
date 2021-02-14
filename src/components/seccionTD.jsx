import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import 'weather-icons/css/weather-icons.css';
import iconUbic from '../img/marcador-de-posicionstreet.svg'
import Plus from '../img/mas-cruz.svg'

export const seccionTD = ()=> {
  
   // render

  return (
    <div className="_seccionTD">
      <div className="_contenedorSecD">
        <img className="_streetIcon" src={ iconUbic }></img>
        <p className="_art">Artciense Museum</p>
        <div className="_mas">
        <img className="_streetPlus" src={ Plus }></img>
        </div>
      </div>
    </div>
  )
}

export default seccionTD;
