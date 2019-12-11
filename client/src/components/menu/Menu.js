import React, { Component } from "react";
import "./Menu.css";
import {Table} from "react-bootstrap";
 
class Menu extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
    //const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
     <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
       <Table style={{background: 'yellow', opacity: .85}}>
         <thead>
           <tr><th>UCF Dollar Value Menu</th></tr>
         </thead>
         <tbody>
           <tr>
             <td>Insomnia Cookies</td>
           </tr>
           <tr><td>Del Taco</td></tr>
           <tr><td>Wendy's</td></tr>
           <tr><td>Taco Bell</td></tr>
           <tr><td>Zaxby's</td></tr>
           <tr><td>Steak 'n Shake</td></tr>
           <tr><td>Mcdonalds</td></tr>
           <tr><td>Cafe Bustelo</td></tr>
           <tr><td>Qdoba</td></tr>
           <tr><td>Einstein Bros. Bagels</td></tr>
           <tr><td>Dunkin</td></tr>
         </tbody>
       </Table>
     </div>
    );
  }
}
export default Menu;