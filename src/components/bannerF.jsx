import React, {useEffect, useState} from 'react';
import getData from '../utils/getData';


export const Banner = ()=> {

  const [data, setData] = useState({
    name: '',
    weather:[],
    main: {},
  })
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
  useEffect(  ()=> {

    getBannerData()
    
  }, [] )


  // render

  return (
    <div>
      <div>
        <h1>{data ? data.name : ''}</h1>
      </div>
    </div>
  )
}

export default Banner;
