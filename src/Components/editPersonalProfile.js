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
            <h2>Edit Personal Info</h2>
            <i className="far fa-check-square fa-2x" onClick={this.handleSubmit}></i>
          </section>

          <hr/>

          <section className="profilePersonal">
            <div>
              <tr>
                <td className="profilePersonal">
                  <p className="profileLabel">First Name |</p>
                </td>
              </tr>
              <tr>
                <td className="profilePersonal">
                  <p className="profileLabel">Last Name |</p>
                </td>
              </tr>
              <tr>
                <td className="profilePersonal">
                  <p className="profileLabel">Phone |</p>
                </td>
              </tr>
            </div>
            <Form>
              <FormGroup controlId="formHorizontalFirstName">
                <Col sm={10}>
                  <input className="profileDetail" onChange={this.handleChange} name="first_name" value={profile.first_name} type="FirstName" placeholder="First Name" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalLastName">
                <Col sm={10}>
                  <input className="profileDetail" onChange={this.handleChange} name="last_name" value={profile.last_name} type="LastName" placeholder="Last Name" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPhone">
                <Col sm={10}>
                  <input className="profileDetail" onChange={this.handleChange} name="phone" value={profile.phone} type="phone" placeholder="+11234567890" />
                </Col>
              </FormGroup>
            </Form>
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
