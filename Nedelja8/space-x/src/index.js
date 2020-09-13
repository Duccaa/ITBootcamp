import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Select from './components/Select';
import LaunchList from './components/LaunchList';
import {getPastLunches, getLunchesByYear} from './services'

const App = () => {

  const [launches, setLaunches] = useState([])
  const [years, setYears] = useState([])
    
  useEffect(() => {
    getPastLunches()
    .then(res => {
      () => setLaunches(res.data)
    })
  }, [launches])

  useEffect(() => {
    const temp = [...launches]
    temp.map(launch => launch.launch_year).reduce((unique, launch) => unique.includes(launch) ? unique : [...unique, launch], [])
    setYears(temp) 
    console.log(years)
  }, [years, launches])
  
  return(
    <>
    <Header />
    <Select years={years} onChange={(e) => {
     getLunchesByYear(e.target.value)
        .then(res =>
          setLaunches(res.data)
        )
    }}/>
    <LaunchList launches={launches}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
