import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Select from './components/Select';
import LaunchList from './components/LaunchList';
import {getPastLunches, getCompanyInfo} from './services'

const App = () => {

  const [comapanyInfo, setCompanyInfo] = useState({})
  const [launches, setLaunches] = useState([])
  const [years, setYears] = useState([])

  useEffect(() => {
    getCompanyInfo()
      .then(res => {
        setCompanyInfo(res.data)
    })
    
    getPastLunches()
    .then(res => {
      setLaunches(res.data)
      setYears(res.data.map(el => el.launch_year).reduce((unique, el) => unique.includes(el) ? unique : [...unique, el], []))
      console.log(res.data)
    })
    
  },[])
  
  return(
    <>
    <Header company={comapanyInfo} />
    <Select years={years} setLaunches={setLaunches} />
    <LaunchList launches={launches} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);