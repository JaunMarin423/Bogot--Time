import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import iconUbic from '../img/marcador-de-posicion.svg'

export const Temp = ()=> {
  
  const [data, setData] = useState({
    name: '',
    weather:[],
    celsius: '',
  });

  function  calCelsius(temp){
    var cell = Math.floor(temp - 273.15)
    return cell;
  }

  useEffect(  ()=> {

   

    const getTempData = async () => {
      const TempData = await getData('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c053ba3b87ec86dee6ac4179f39b78ee')
      if (TempData) {
        setData({
          name: TempData.name,
          weather: TempData.weather,
          celsius: calCelsius(TempData.main.temp),
        })
        
      }
    }
    getTempData()
    
  }, [] )

  // render

  return (
    <div>
      <h1 className="_temp" >{data ? data.celsius : ''} <sup className="subTemp"> °C  </sup></h1>
    </div>
  )
}

export default Temp;