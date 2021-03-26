// import logo from './logo.svg'
// import './App.css'

import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Profiles from './pages/Profiles'

import Notify from './components/js/jsfnc'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/profiles'>
            <Profiles />
          </Route>
          <Route path='/employees'>
            <Employees />
          </Route>
          <Route path='/calendar'>
            <Calendar />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
