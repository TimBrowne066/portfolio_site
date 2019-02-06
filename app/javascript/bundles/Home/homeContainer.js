import React from 'react';
import Agile from '../../../assets/images/AGILE.jpg';
import EyeEnc from '../../../assets/images/EYEENC.jpg';
import OnBlast from '../../../assets/images/onblast.jpg';
import Tourage from '../../../assets/images/TOURAGE.jpg';
import Github from '../../../assets/images/github.png'
import Www from '../../../assets/images/www.jpg'
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import NavBar from '../../Components/navBar'
import Avatar from '../../../assets/images/avatar.jpg'
import Email from "../../../assets/images/email.png"
import LinkedIn from '../../../assets/images/linkedin.png'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="home_header">
      <NavBar/>

        <div className="parallax1">
          <h1>Tim Browne</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="content-box">
            <h3 className="text-center">About me</h3>
          <br/>
          <br/>

              <Image className="avatar" thumbnail src={Avatar} /><br/>
              <a href="https://www.linkedin.com/in/timothydanielbrowne/"><img className="link-button" src={LinkedIn}/></a><a href="https://github.com/TimBrowne066"><img className="link-button" src={Github}/></a><a href="mailto:timbrowne066@gmail.com"><img className="link-button" src={Email}/></a>

              <p className="text-center">I am a former semiconductor fabrications technician, photolithographer, optician, and punk musician turned software engineer.  I create dynamic software and web applications from the Database up to the User Interface with a wide array of storied and cutting edge technologies.</p>
              <p className="text-center">My work experience and education at have provided me with a sizeable skillset that I continue to expand.  My current repertoire of languages and libraries includes Ruby, C#, .NET, JavaScript, HTML5, CSS3, Rails, NodeJS, React, Redux, Angular, Vue, Sass, Bootstrap, JQuery, PostgreSQL, SQL Server, Amazon Web Services, Google Cloud Platform, and many others.</p>
              <p className="text-center">I am currently seeking a role as a software engineer where I can continue to refine my skills, learn and implement new technologies, and have a blast doing it!</p>
        </div>

        <div className="parallax2">
          <h2 className="projects-header">Projects</h2>
        </div>
          <div className="content-box">
                <div className="container text-center">
                  <div className="content">
                      <div className="content-overlay"></div>
                      <img className="content-image" src={Agile}/>
                      <div className="content-details fadeIn-top">
                        <h3>Agile Hires</h3>
                        <p>React - Rails - Devise - PostgreSQL</p>
                        <a href="https://github.com/TimBrowne066/AHSite"><img className="icon" src={Github}/></a>
                        <a href="http://www.agilehires.com/"><img className="icon" src={Www}/></a>
                      </div>
                  </div>
                </div>
                <div className="container text-center">
                  <div className="content">
                      <div className="content-overlay"></div>
                      <img className="content-image" src={EyeEnc}/>
                      <div className="content-details fadeIn-top">
                        <h3>Eye Encounters</h3>
                        <p>React-on-Rails - Bootstrap - JQuery</p>
                        <a href="https://github.com/TimBrowne066/EyeEnc"><img className="icon" src={Github}/></a>
                        <a href="http://www.eyeencounters.net/"><img className="icon" src={Www}/></a>
                      </div>
                  </div>
                </div>
              <div className="container">
                <div className="content">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={Tourage}/>
                    <div className="content-details fadeIn-top">
                      <h3>Tourage</h3>
                      <p>React-on-Rails - Bootstrap - OAuth2 - AWS - Facebook API - Google Maps API</p>
                      <a href="https://github.com/TimBrowne066/tourage"><img className="icon" src={Github}/></a>
                      <a href="http://tourageapp.herokuapp.com/"><img className="icon" src={Www}/></a>
                    </div>
                </div>
              </div>
              <div className="container">
                <div className="content">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={OnBlast}/>
                    <div className="content-details fadeIn-top">
                      <h3>OnBlast!</h3>
                      <p>ReactJS - Ruby on Rails - Devise - AWS - Bootstrap</p>
                      <a href="https://github.com/DRBragg/on-blast"><img className="icon" src={Github}/></a>
                      <a href="https://on-blast.herokuapp.com/"><img className="icon" src={Www}/></a>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default HomeContainer;
