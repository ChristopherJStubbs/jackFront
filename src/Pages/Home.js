import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className = "Button-Div">
          <ButtonToolbar>
            <Button className="ActuallyButton" href="/login" bsStyle="primary" bsSize="large">
              Sign In
            </Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button className="ActuallyButton" href="/register" bsStyle="primary" bsSize="large">
              Register
            </Button>
          </ButtonToolbar>
        </div>
        <hr/>
        <div className="About-Container">
          <h3 className="About-Us"> ABOUT US </h3>
          <p className="About-Me">
            Own Up Grown Up is a scheudling and reminder application that bridges the gap between being an adult and actually rememebering what adults have to do. Own Up Grown Up's platform makes scheudling all your "adulting" needs fast and reliable.  From car maintenance to home maintenance, Own Up Grown Up has all your scheudling and reminder needs.
          </p>
          <br/>
          <p className="About-Me">
            Own Up Grown Up was created by TEAM JACK (Julianne Peters, Andrew Garrett, Chris Stubbs, and Kristen McCloud) and includes professional design and security.  Using our application and the Twilio API, you will always get your reminder and always be able to change your personal preferences.
            </p>
            <br/>
            <p className="About-Me">
            Don't forget to remember, or just use Own Up Grown Up.
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
