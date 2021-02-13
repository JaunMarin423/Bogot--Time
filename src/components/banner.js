import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ky from 'ky';

import Image from '../img/banner.jpg'

export default class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
    }
  }
  
async componentDidMount() {
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

  render() {
    return (
    <div>
        <div>
        <h1>Hello, {this.state.data.name} +</h1>
        </div>
    </div>
    )
  }
}
