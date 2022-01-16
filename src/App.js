
import React from 'react';
import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Tablee from './components/Tablee';

const initialState = [{
  "continent":"Asia",
  "country":"China",
  "population":1439323776,
  "cases":{
  "new":"+119",
  "active":3461,
  "critical":13,
  "recovered":96767,
  "1M_pop":"73",
  "total":104864,
  },
  "deaths":{
  "new":"NULL",
  "1M_pop":"3",
  "total":4636,
  },
  
  "day":"2022-01-16",
  "time":"2022-01-16T07:00:05+00:00",
  }]
function App() {
  const [info, setinfo] = useState(initialState)
  const [tcases, settcases] = useState(0);
  const [tactive, settactive] = useState(0);
  const [tdeaths, settdeaths] = useState(0);
  const [trecov, settrecov] = useState(0)
  useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "e97eb08749msh15086bff0723b6bp19c168jsn6528f4b271e2"
      }
    })
      .then(res => {
        res.json().then(
          d => {
            setinfo(d.response)
            console.log(d.response)
            d.response.forEach((e)=>{if(e.country==="All"){
              settactive(e.cases.active)
              settcases(e.cases.total)
              settrecov(e.cases.recovered)
              settdeaths(e.deaths.total)
              
            }})
          });

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
          <Card name="Cases" data={tcases} />
          <Card name="Active" data={tactive} />
          <Card name="Deaths" data={tdeaths} />
          <Card name="Recovered" data={trecov} />
          
         
        </div>
        <br/>
        <br/>
        <br/>
        <br/> 
        <Tablee data={info}/>
      </div>

    </div>
  );
}

export default App;
