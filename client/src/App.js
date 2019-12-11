import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './store'
import OpenStreetMap from './components/map/OpenStreetMap'
import 'bootstrap/dist/css/bootstrap.min.css'

import MenuButton from './components/menu/MenuButton'
import Menu from './components/menu/Menu'
import { Nav } from 'react-bootstrap';

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
          <Nav vertical="true" style={{height:"100%", width: "4%", margin: "0", float:"left", backgroundColor: "#343a40"}}>
            <Nav.Item>
              <Nav.Link>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <OpenStreetMap/>
        </div>
      </Provider>
    )
  }
}

export default App 