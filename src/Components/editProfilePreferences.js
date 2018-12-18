import React, { Component } from 'react';
import AuthService from '../services'
import { getProfile, editProfile } from '../API'
import { ButtonToolbar,ToggleButtonGroup,ToggleButton } from 'react-bootstrap';
import Toggle from "react-toggle-component"
import "react-toggle-component/styles.css"

class EditProfilePreferences extends Component {
  constructor(props){
    super(props)

    this.auth = new AuthService()
    this.state ={
      profile: {
        medical: true,
        financial: true,
        misc: true
      }
    }
  }
  render() {
    console.log(this.state);
    let { home_owner,car_owner,pet_owner } = this.state
    return (
      <main>
        <section className="profileTitle">
          <h2>Edit Preferences</h2>
          <i className="far fa-check-square fa-2x icon" onClick={this.handleSubmit}></i>
        </section>

        <hr/>

        <section id="profileSection">
          <section className="column">
            <p className="profileLabel">
              Home:
              <hr/>
              <Toggle
                name="home_owner"
                checked={this.state.profile.home_owner}
                onToggle={() => this.handleToggle("home_owner")}
                />
            </p>
            <p className="profileLabel">
              Car:
              <hr/>
              <Toggle
                name="car_owner"
                checked={this.state.profile.car_owner}
                onToggle={() => this.handleToggle("car_owner")}
                />
            </p>
            <p className="profileLabel">
              Pets:
              <hr/>
              <Toggle
                name="pet_owner"
                checked={this.state.profile.pet_owner}
                onToggle={() => this.handleToggle("pet_owner")}
                />
            </p>
          </section>
          <section className="column">
            <p className="profileLabel">
              Medical:
              <hr/>
              <Toggle
                name="medical"
                checked={this.state.medical}
                onToggle={() => this.handleToggle("medical")}
                />
            </p>
            <p className="profileLabel">
              Financial:
              <hr/>
              <Toggle
                name="financial"
                checked={this.state.financial}
                onToggle={() => this.handleToggle("financial")}
                />
            </p>
            <p className="profileLabel">
              Misc:
              <hr/>
              <Toggle
                name="misc"
                checked={this.state.misc}
                onToggle={() => this.handleToggle("misc")}
                />
            </p>
          </section>
        </section>
      </main>
    )
  }

  componentDidMount = () => {
    getProfile(this.auth.getUserId())
    .then(APIprofile => {
      console.log(APIprofile);
      this.setState({profile: APIprofile})
    })
  }

  handleToggle = (category) => {
    console.log(category);
    let { profile } = this.state
    profile[category] = !profile[category]
    this.setState({profile})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.profile);
    editProfile(this.state.profile)
    .then(resp => {

      if(resp.errors){
        console.log(resp.json());
      }else{
      this.props.handlePreferencesClick()
      this.props.refresh()
      }
    })
  }
}

export default EditProfilePreferences;
