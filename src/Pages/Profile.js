import React, { Component } from 'react';
import AuthService from '../services'
import { getProfile } from '../API'
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap';

class Registration extends Component {
  constructor(props) {
    super(props)
    this.auth= new AuthService()
    this.state = {
      errors: {},
      profile: {
        first_name: '',
        last_name: '',
        phone: '',
        home_owner: false,
        car_owner: false,
        pet_owner: false,
      }
    }
  }
  render() {
    console.log(this.state);
    let { first_name, last_name, phone, home_owner, car_owner, pet_owner } = this.state.profile
    return (
      <main>
        <h1 className="greeting">My Profile</h1>
        <table className="profileContainer">
          <div className="profilePersonal">
            <h2>Personal Info</h2>
            <tr>
              <td>
                <label className="profileLabel">First Name:</label>
                <h3>{first_name}</h3>
              </td>
            </tr>
            <h3>Last Name: {last_name}</h3>
            <h3>Phone Number: {phone}</h3>
          </div>

          <div className="profilePreferences">
            <h2>Task Preferences</h2>
            <h3>Home Owner: {home_owner ? "True" : "False"}</h3>
            <h3>Car Owner: {car_owner ? "True" : "False"}</h3>
            <h3>Pet Owner: {pet_owner ? "True" : "False"}</h3>
          </div>
        </table>
      </main>
    )
  }

  componentDidMount() {
    getProfile(this.auth.getUserId())
    .then(APIprofile => {
      console.log(APIprofile);
      this.setState({profile: APIprofile})
    })
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
      case "car":
        form.user.profile_attributes.car_owner = !form.user.profile_attributes.car_owner
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
      email == /\A[^@\s]+@[^@\s]+\z/ &&
      password != 0 && password < 6 &&
      profile_attributes.first_name != "" &&
      profile_attributes.last_name != "" &&
      profile_attributes.phone == /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/
    )
  }
}

export default Registration;
