import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { createAppointment } from '../API/twillio'
import AuthService from '../services'

class AptForm extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      sign_inSuccess: false,
      form: {
        appointment: {
          name: "",
          phone_number: "",
          time: ""
        }
      }
    }
  }
  render() {
    let { name, phone_number, time } = this.state.form.appointment
    console.log(this.state.form);
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onChange} name="name" value={name} type="text" placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPhone_Number">
            <Col componentClass={ControlLabel} sm={2}>
              Phone
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onChange} name="phone_number" value={phone_number} type="text" placeholder="(800)555-5555" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTime">
            <Col componentClass={ControlLabel} sm={2}>
              Date
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onChange} name="time" value={time} type="time" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
    onChange = (e) => {
    let { form } = this.state
    form.appointment[e.target.name] = e.target.value
    this.setState ({
      form
    })
  }
    onSubmit = (e) => {
    e.preventDefault()
    createAppointment(this.state.form)
    .then(resp => {

    })
  }
}

export default AptForm;
