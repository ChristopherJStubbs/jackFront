import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AuthService from '../services';

class Header extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
  }
  render() {
    return (
      <div className="Header-Div">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand className = "BrandName">
              <a className="logo" href="/"><i className="fas fa-arrow-alt-circle-up fa-2x"></i>wn-Up Grown-Up</a>
            </Navbar.Brand>
          </Navbar.Header>
          {this.auth.loggedIn()
              ? <Nav className="nav">
                <NavItem eventKey={1} href="/">
                  Dashboard
                </NavItem>
                <NavItem eventKey={3} href='/tasks'>
                  All Tasks
                </NavItem>
                <NavItem eventKey={4} href="/">
                  Edit Tasks
                </NavItem>
                <NavItem onClick={this.handleClick} eventKey={5} href="/">
                  Logout
                </NavItem>
              </Nav>
            : <Nav className="nav">
                <NavItem eventKey={1} href="/">
                  Home
                </NavItem>
              </Nav>
          }
        </Navbar>
      </div>
    );
  }

  handleClick = () => {
    this.auth.logout();
  }
}

export default Header;
