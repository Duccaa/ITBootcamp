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
  const [select, setSelect] = useState('')
    
  useEffect(() => {
    getPastLunches()
    .then(res => {
      setLaunches(res.data)
    }) 
    const temp = [...launches]
    temp.map(launch => launch.launch_year).reduce((unique, launch) => unique.includes(launch) ? unique : [...unique, launch], [])
    setYears(temp)
  },[])
  
  useEffect(() => {
    getLunchesByYear(select)
        .then(res => {
          setLaunches(res.data)
        })
  }, [select])

  const handleSelect = (e) => {
    setSelect(e.target.value)
  }
  
  return(
    <>
    <Header />
    <Select years={years} handleSelect={handleSelect}/>
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
