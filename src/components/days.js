import React, { useState, useEffect } from 'react';

async function getData() {
  try {
  const data = await ky.get(
    'http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=c053ba3b87ec86dee6ac4179f39b78ee',
    {
        retry: {
          limit: 10,
          methods: ['get'],
          statusCodes: [413]
        }
      }).json();
      console.log(data);
      return data
  } catch (e) {
    console.log('problemas en la petición de bogotá, ' + e)
  }
}


export default class Banner extends React.Component {

  render() {
    getData()

    return(
    <div>
    <div className="_Cuadreado" >Cuadreado</div>
    <div className="_Cuadreado">Duadreado</div>
    <div>
     <h1>Hello, </h1>
    </div>
    </div>
    )
  }
}