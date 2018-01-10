import React from 'react';
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsModal: false,
      contactModal: false,
    }
  }

  render() {

    return (
      <div className="NavBar">
      <Navbar className="navigation" fixedTop>
        <ul>
          <input type="checkbox" id="menu"/>
          <label htmlFor="menu" className="nav-menu text-center"></label>
          <li className="text-center"><a href="https://www.github.com/timbrowne066">GitHub</a></li>
          <li className="text-center"><a href="mailto:timbrowne066@gmail.com">Contact</a></li>
          <li className="text-center"><a href='https://docs.google.com/document/d/1MwK8nsy-QkatIJyo_ztqzVKDG4GlFkpHFPJXJqPjnI0/export?format=pdf' download="tbresume.pdf">Resume</a></li>
        </ul>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
