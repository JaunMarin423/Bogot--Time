import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';
import 'weather-icons/css/weather-icons.css';

export const Banner = ()=> {
  
  const [data, setData] = useState({
    name: '',
    weather:[],
    main: {},
    icon: '',
    weatherIcon: {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  })

  data.icon = {
     Thunderstorm : "wi-thinderstorm"
  }

  useEffect(  ()=> {

    const getBannerData = async () => {
      const bannerData = await getData('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c053ba3b87ec86dee6ac4179f39b78ee')
      if (bannerData) {
        setData({
          name: bannerData.name,
          weather: bannerData.weather,
          main: bannerData.main,
          icon: bannerData.weather.main,
        })
      }
    }
    getBannerData()
    
  }, [] )


  // render

  return (
    <div className="_iconTemp">
      <i className="wi wi-night-sleet display-1"/>
    </div>
  )
}

export default Banner;
