import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import 'weather-icons/css/weather-icons.css';
import iconUbic from '../img/marcador-de-posicionstreet.svg'

export const SeccionD = ()=> {
  
   // render

  return (
    <div className="_seccionD">
      <div className="_contenedorSecD">
        <img className="_streetIcon" src={ iconUbic }></img>
        <p>Arab Street Singapore</p>
      </div>
    </div>
  )
}

export default SeccionD;
