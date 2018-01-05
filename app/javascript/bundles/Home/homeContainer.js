import React from 'react';

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
        <h1>Timothy Browne</h1>
        <h2>Software and Web Developer</h2>
      </div>

      <div className="content">
        <h3>Headline</h3>
        <p>Catchy bio.</p>
      </div>

      <div className="parallax2">
        <h1>Projects</h1>
      </div>
      </div>
    );
  }
}

export default HomeContainer;
