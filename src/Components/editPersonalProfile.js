import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import { editProfile } from '../API'


class EditPersonalProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        profile: {
          id: '',
          first_name: '',
          last_name: '',
          phone: ''
        }
      }
    }
}
  render() {
    console.log(this.state.form);
    let { profile } = this.state.form
    return (
      <main>
        <div>
          <section className="profileTitle">
            <h2>Edit Info</h2>
            <i className="far fa-check-square fa-2x icon" onClick={this.handleSubmit}></i>
          </section>

          <hr/>

          <section id="profileSection">
            <section className="column">
              <p className="profileLabel">
                First Name:
                <hr/>
              </p>
              <p className="profileLabel">
                Last Name:
                <hr/>
              </p>
              <p className="profileLabel">
                Phone:
                <hr/>
              </p>
            </section>
            <section className="column">
              <Form className="editPersonal">
                <FormGroup controlId="formHorizontalFirstName">
                  <Col sm={10}>
                    <input
                      className="profile"
                      onChange={this.handleChange}
                      name="first_name"
                      value={profile.first_name}
                      type="FirstName"
                      placeholder="First Name"
                      />
                      <br/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalLastName">
                  <Col sm={10}>
                    <input
                      className="profile"
                      onChange={this.handleChange}
                      name="last_name"
                      value={profile.last_name}
                      type="LastName"
                      placeholder="Last Name"
                      />
                      <br/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPhone">
                  <Col sm={10}>
                    <input
                      className="profile"
                      onChange={this.handleChange}
                      name="phone"
                      value={profile.phone}
                      type="phone"
                      placeholder="+11234567890"
                      />
                      <br/>
                  </Col>
                </FormGroup>
              </Form>
            </section>
          </section>
        </div>
      </main>
    )
  }

  componentDidMount(){
    let { form } = this.state
    let { profile } = this.props
    form.profile = profile
    this.setState({form})
  }

  handleChange = (e) => {
    let { form } = this.state
    form.profile[e.target.name] = e.target.value
    this.setState({form})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.form.profile);
    editProfile(this.state.form.profile)
    .then(resp => {
      console.log(resp);
      this.props.handlePersonalClick()
      this.props.refresh()
    })

  }
}

export default EditPersonalProfile;
