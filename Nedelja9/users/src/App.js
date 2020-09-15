import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Users from './components/Users';
import Filter from './components/Filter';
import { getAllUsers } from './services';


const App = () => {

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllUsers().then(res => {
      setUsers(res.data.data)
    })
  }, [])

  return (
    <Router>
      <nav>
        <Link style={{padding: '10px'}} to="/">All Useres</Link>
        <Link to="/filter">Search Users</Link>
      </nav>
      
      <Switch>
        <Route exact path="/">
          <Users users={users}/>
        </Route>
        <Route path="/filter">
          <Filter filter={filter} setFilter={setFilter} users={users} setUsers={setUsers} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
