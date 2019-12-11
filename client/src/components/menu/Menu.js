import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import "./Menu.css";
 
class Menu extends Component {


  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><Button variant="link"><h2>Home</h2></Button></h2>
        <h2><Button variant="link"><h2>About</h2></Button></h2>
        <h2><Button variant="link"><h2>Search</h2></Button></h2>
        <h2><Button variant="link"><h2>Favorite</h2></Button></h2>
      </div>
    );
  }
}
 
export default Menu;