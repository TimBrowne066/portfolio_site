import React from 'react';
import EyeEnc from '../../../assets/images/EYEENC.jpg'
import OnBlast from '../../../assets/images/onblast.jpg'
import Tourage from '../../../assets/images/TOURAGE.jpg'
import Github from '../../../assets/images/github.png'
import Www from '../../../assets/images/www.jpg'
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="home_header">
        <div className="parallax1">
          <h1>Hello, I'm Tim Browne</h1> '
          <h2>I'm a Full Stack Web Developer</h2> '
        </div>

        <div className="content-box">
          <h3>Headline</h3>
          <p>Catchy bio.</p>
        </div>

        <div className="parallax2">
          <h1 className="projects-header">Projects</h1>
        </div>
          <div className="content-box">
            <Row>
              <div className="container">
                <div className="content">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={EyeEnc}/>
                    <div className="content-details fadeIn-top">
                      <h3>Eye Encounters</h3>
                      <p>React-on-Rails - Bootstrap - JQuery</p>
                      <a href="/"><img className="icon" src={Github}/></a>
                      <a href="/"><img className="icon" src={Www}/></a>
                    </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className="container">
                <div className="content">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={Tourage}/>
                    <div className="content-details fadeIn-top">
                      <h3>Tourage</h3>
                      <p>React-on-Rails - Bootstrap - OAuth2 - AWS - Facebook API - Google Maps API</p>
                      <a href="/"><img className="icon" src={Github}/></a>
                      <a href="/"><img className="icon" src={Www}/></a>
                    </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className="container">
                <div className="content">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={OnBlast}/>
                    <div className="content-details fadeIn-top">
                      <h3>OnBlast!</h3>
                      <p>ReactJS - Ruby on Rails - Devise - AWS - Bootstrap</p>
                      <a href="/"><img className="icon" src={Github}/></a>
                      <a href="/"><img className="icon" src={Www}/></a>
                    </div>
                </div>
              </div>
            </Row>
          </div>
      </div>
    );
  }
}

export default HomeContainer;
