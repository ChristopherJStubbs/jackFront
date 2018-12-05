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
            <Navbar.Brand>
              <a href="/">Insert Name Here</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            {!this.auth.loggedIn() &&
            <NavItem eventKey={2} href="/user/:id/tasks">
             My Tasks
            </NavItem>}
            {this.auth.loggedIn() &&
            <NavItem eventKey={3} href='/tasks'>
              All Tasks
            </NavItem>}
            {this.auth.loggedIn() &&
            <NavItem eventKey={4} href="/">
              Edit Tasks
            </NavItem>}
            {this.auth.loggedIn() &&
            <NavItem onClick={this.handleClick} eventKey={5} href="/">
              Logout
            </NavItem>}
          </Nav>
        </Navbar>
      </div>
    );
  }

  handleClick = () => {
    this.auth.logout();
    this.props.logout();

  }
}

export default Header;
