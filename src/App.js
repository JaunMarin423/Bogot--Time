import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'weather-icons/css/weather-icons.css';
import Banner from './components/bannerF'
import Temp from './components/timeBog'
import Icono from './components/icon'
import SeccionD from './components/seccionD'
import './Styles/App.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
    marginRigth: 255,
    marginLeft: 377 ,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="_Container">
    <div className="tiempo" >
      <Icono/>
    </div>
    <div className="temperatura" >
      <Temp/>
    </div>
      <div className="_Banner">
        <Banner/>
      </div>
      <div className="_SeccionesU">

      <h3 className="_texttos"><a className="_negrilla">3 Days</a> Forecast</h3>

      </div>
      <div className="_SeccionesD">
        <h3 className="_texttos"><a className="_negrilla">Place to</a> Visit</h3>

        <SeccionD/> 
        
      </div>
      <div className="_SeccionesT">
        <p>Top Raviuws</p>

      </div>
      <div className="_SeccionesC">

      </div>
    </div>


  );
}

export default App;
