import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import iconUbic from '../img/marcador-de-posicion.svg'

export const Banner = ()=> {
  
  const [data, setData] = useState({
    name: '',
    weather:[],
    main: {},
  })

  useEffect(  ()=> {

    const getBannerData = async () => {
      const bannerData = await getData('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c053ba3b87ec86dee6ac4179f39b78ee')
      if (bannerData) {
        setData({
          name: bannerData.name,
          weather: bannerData.weather,
          main: bannerData.main,
        })
      }
    }
    getBannerData()
    
  }, [] )


  // render

  return (
  <div>
      <div className="_containerIcon">
        <img className="_icon" src={ iconUbic }></img>
    
        <h1 className="_name" >{data ? data.name : ''}</h1>
      </div>
    </div>
  )
}

export default Banner;
