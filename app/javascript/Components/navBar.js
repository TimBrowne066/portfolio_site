import React from 'react';
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="NavBar">
      <Navbar className="navigation" fixedTop>
        <ul>
          <input type="checkbox" id="menu"/>
          <label htmlFor="menu" className="nav-menu text-center"></label>
          <li className="text-center">Projects</li>
          <li className="text-center">Contact</li>
          <li className="text-center">Resume</li>
        </ul>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
