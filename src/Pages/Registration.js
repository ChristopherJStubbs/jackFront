import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import AuthService from '../services'
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap';

class Registration extends Component {
  constructor(props) {
    super(props)
    this.auth= new AuthService()
    this.state = {
      submitted: false,
      form: {
        user: {
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          phone: '',
          home_owner: false,
          car_owner: false
        }
      }
    }
  }
  render() {
    console.log(this.state.form.user);
    let { email, password, first_name, last_name, phone, home_owner, car_owner } = this.state.form.user
    return (
      <div>
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl onChange={this.handleChange} name="email" value={email} type="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl onChange={this.handleChange} name="password" value={password} type="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalFirstName">
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl onChange={this.handleChange} name="first_name" value={first_name} type="FirstName" placeholder="First Name" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalLastName">
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl onChange={this.handleChange} name="last_name" value={last_name} type="LastName" placeholder="Last Name" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPhone">
          <Col componentClass={ControlLabel} sm={2}>
            Phone
          </Col>
          <Col sm={10}>
            <FormControl onChange={this.handleChange} name="phone" value={phone} type="phone" placeholder="555-555-5555" />
          </Col>
        </FormGroup>
        <FormGroup>
              <Checkbox onClick={() => this.handleCheck(1)} inline>Home?</Checkbox> <Checkbox onClick={() => this.handleCheck(2)} inline>Car?</Checkbox>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button  type="submit">Sign In</Button>
          </Col>
        </FormGroup>
        {this.state.submitted && <Redirect to="/"/>}
      </Form>
      </div>
    )
  }

  handleChange = (e) => {
    let { form } = this.state
    form.user[e.target.name] = e.target.value
    this.setState({ form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.auth.register(this.state.form)
    .then(status => {
      if(status.errors){
        this.setState({ submitted: false })
      }else{
        this.auth.sign_in(this.state.form)
        this.setState({ submitted: true })
      }
    })
  }

  handleCheck = (type) => {
    let { form } = this.state
    if (type == 1) {
      form.user.home_owner = !form.user.home_owner
      this.setState ({
        home_owner: true
      })
    } else if (type == 2) {
      form.user.car_owner = !form.user.car_owner
      this.setState ({
        car_owner: true
      })
    }
  }

}

export default Registration;
