import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import OpenStreetMap from './components/OpenStreetMap'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <OpenStreetMap/>
        </div>
      </Provider>
    )
  }
}

export default App
