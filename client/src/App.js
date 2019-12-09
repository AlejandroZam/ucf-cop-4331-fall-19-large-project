import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './store'
import OpenStreetMap from './components/OpenStreetMap'
import 'bootstrap/dist/css/bootstrap.min.css'

import MenuButton from './MenuButton'
import Menu from './Menu'

class App extends Component {

constructor(props,context){
  super(props,context);
  this.state = {
    visible: false
  };
 
  this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
}

handleMouseDown(e) {
  this.toggleMenu();

  console.log("clicked");
  e.stopPropagation();
}

toggleMenu(){
  this.setState({
    visible: !this.state.visible
  })
}

  render () {
    return (

      <Provider store={ store }>
        <div className="App">

        <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
      menuVisibility={this.state.visible}/>
          <OpenStreetMap/>
        </div>
      </Provider>
    )
  }
}

export default App
