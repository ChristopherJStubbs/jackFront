import React, { Component } from 'react';
import AuthService from '../services'
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap';

class Registration extends Component {
  constructor(props) {
    super(props)
    this.auth= new AuthService()
    this.state = {
      errors: {},
      form: {
        user: {
          email: '',
          password: '',
          profile_attributes: {
            first_name: '',
            last_name: '',
            phone: '',
            home_owner: false,
            car_owner: false,
            pet_owner: false,
          }
        }
      }
    }
  }
  render() {
    console.log(this.state);
    let { email, password, profile_attributes } = this.state.form.user
    let errorMsgs =[]
    if(Object.keys(this.state.errors).length > 0){
      Object.entries(this.state.errors).forEach(entry => {
        let key = entry[0]
        let value = entry[1]
        errorMsgs.push(`${key} ${value}.`)
      })
    }
    return (
      <div>
        <h1 className="greeting">
        Register:
        </h1>
        <h3 className="errors">
          {errorMsgs[0]}
        </h3>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email:
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleUserChange} name="email" value={email} type="email" placeholder="Email"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password:
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleUserChange} name="password" value={password} type="password" placeholder="Password" required/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalFirstName">
            <Col componentClass={ControlLabel} sm={2}>
              First Name:
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleProfileChange} name="first_name" value={profile_attributes.first_name} type="FirstName" placeholder="First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalLastName">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name:
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleProfileChange} name="last_name" value={profile_attributes.last_name} type="LastName" placeholder="Last Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPhone">
            <Col componentClass={ControlLabel} sm={2}>
              Phone:
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleProfileChange} name="phone" value={profile_attributes.phone} type="phone" placeholder="555-555-5555" />
            </Col>
          </FormGroup>
          <FormGroup className="ownership">
            <Col>
              I have a (check all that apply)...
            </Col>
            <Col>
              <Checkbox onChange={() => this.handleOwnershipChoice("home")} inline>Home</Checkbox>
              <Checkbox onChange={() => this.handleOwnershipChoice("car")} inline>Car</Checkbox>
              <Checkbox onChange={() => this.handleOwnershipChoice("pet")} inline>Pet</Checkbox>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button  type="submit">Register</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

  handleUserChange = (e) => {
    let { form } = this.state
    form.user[e.target.name] = e.target.value
    this.setState({ form })
  }

  handleProfileChange = (e) => {
    let { form } = this.state
    form.user.profile_attributes[e.target.name] = e.target.value
    this.setState({ form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { form } = this.state
    form.user.profile_attributes.phone = '+1'+form.user.profile_attributes.phone
      this.auth.register(form)
      .then(status => {
        if(status.errors){
          this.setState({errors: status.errors})
        }else{
          this.auth.sign_in(form)
          this.props.refresh()
        }
      })
  }

  handleOwnershipChoice = (type) => {
    let { form } = this.state
    switch(type){
      case "home":
        form.user.profile_attributes.home_owner = !form.user.profile_attributes.home_owner
      break
      case "car":
        form.user.profile_attributes.car_owner = !form.user.profile_attributes.car_owner
      break
      case "pet":
        form.user.profile_attributes.pet_owner = !form.user.profile_attributes.pet_owner
    }
    this.setState ({
      form: form
    })
  }

  isValid = () => {
    const { email, password, profile_attributes } = this.state
    return(
      email === /\A[^@\s]+@[^@\s]+\z/ &&
      password !== 0 && password < 6 &&
      profile_attributes.first_name !== "" &&
      profile_attributes.last_name !== "" &&
      profile_attributes.phone === /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/
    )
  }
}

export default Registration;
