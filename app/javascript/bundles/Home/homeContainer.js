import React from 'react';
import EyeEnc from '../../../assets/images/EYEENC.jpg'
import OnBlast from '../../../assets/images/onblast.jpg'
import Tourage from '../../../assets/images/TOURAGE.jpg'
import Github from '../../../assets/images/github.png'

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
        <h1>Hello, my name is Tim Browne</h1>
        <h2>I am a Full Stack Web Developer</h2>
      </div>

      <div className="content-box">
        <h3>Headline</h3>
        <p>Catchy bio.</p>
      </div>

      <div className="parallax2">
        <h1 className="projects-header">Projects</h1>
      </div>
      <div className="content-box">
      <div className="container">
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src={EyeEnc}/>
            <div className="content-details fadeIn-top">
              <h3>Eye Encounters</h3>
              <p>React-on-Rails - Bootstrap - JQuery</p>
              <a href="/"><img className="icon" src={Github}/></a>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src={Tourage}/>
            <div className="content-details fadeIn-top">
              <h3>Tourage</h3>
              <p>React-on-Rails - Bootstrap - OAuth2 - AWS - Facebook API - Google Maps API</p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src={OnBlast}/>
            <div className="content-details fadeIn-top">
              <h3>OnBlast!</h3>
              <p>ReactJS - Ruby on Rails - Devise - AWS - Bootstrap</p>
            </div>
          </a>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default HomeContainer;
