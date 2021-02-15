import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import iconUbic from '../img/marcador-de-posicion.svg'

export const Fran = ()=> {
  
  const [data, setData] = useState({
    name: '',
    weather:[],
    celsius: '',
    country: '',
  });

  function  calCelsius(Fran){
    var cell = Math.floor(Fran - 273.15)
    return cell;
  }

  useEffect(  ()=> {

   

    const getFranData = async () => {
      const FranData = await getData('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=c053ba3b87ec86dee6ac4179f39b78ee')
      if (FranData) {
        setData({
          name: FranData.name,
          country: FranData.sys.country,
          weather: FranData.weather,
          celsius: calCelsius(FranData.main.temp),
        })
        
      }
    }
    getFranData()
    
  }, [] )

  // render

  return (
    <div className="_Fran">
      <div className="_cuadrado">
      <i className="wi wi-day-fog display-1 _frio"/>
      </div>
        <div>
          <div className="_franGra _letra" >{data ? data.celsius : ''}<div className="_centy _letra">°C</div></div>
          <div className="">
            <p className = "_pais _letra">{data ? data.name : ''}</p>
            <p className = "_contry _letra">{data ? data.country : ''}</p>
          </div>
        </div>
    </div>
  )
}

export default Fran;