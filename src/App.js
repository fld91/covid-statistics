
import React from 'react';
import './App.css';
import Card from './components/Card';
import {useEffect,useState} from 'react';

const initialState={}

function App() {
  const [info, setinfo] = useState(initialState)
useEffect(() => {
  fetch("https://covid-193.p.rapidapi.com/statistics?country=china", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "e97eb08749msh15086bff0723b6bp19c168jsn6528f4b271e2"
    }
  })
  .then(response => {
    console.log("sdfghjkl",response);
  })
  .catch(err => {
    console.error(err);
  });
  
}, [])
  return (
    <div className="App">
      <div>
        <h1>Covid-Statistics</h1>
        <div className='cardBar'>
        <Card name="Cases" data={30545618}/>
        <Card name="Deaths" data={1245545}/>
        <Card name="Recovered" data={46548486}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
