import React, { Component } from 'react';
import {Button, Navbar, Nav, NavItem } from 'react-bootstrap';
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
              <a href="/">Insert Name Here</a>
            </Navbar.Brand>
          </Navbar.Header>
          {this.auth.loggedIn()
              ? <Nav>
                <NavItem eventKey={1} href="/">
                  Dashboard
                </NavItem>
                <NavItem eventKey={2} href="/user/:id/tasks">
                 My Tasks
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
            : <Nav>
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
