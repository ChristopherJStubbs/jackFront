import React, { Component } from 'react';
import AuthService from '../services'
import { getProfile } from '../API'
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
    return (
      <main>
        <section className="profileTitle">
          <h2>Task Preferences</h2>
          <i className="fas fa-edit fa-2x" onClick={this.props.handlePreferencesClick}></i>
        </section>

        <hr/>

        <section className="profilePreferences">
          <div>
            <tr>
              <td className="profilePersonal">
                <p className="profileLabel">Home |</p>
              </td>
            </tr>
            <tr>
              <td className="profilePersonal">
                <p className="profileLabel">Car |</p>
              </td>
            </tr>
            <tr>
              <td className="profilePersonal">
                <p className="profileLabel">Pets |</p>
              </td>
            </tr>
          </div>
          <div>
            <td className="profilePersonal">
              <Toggle name="home" checked={this.state.profile.home_owner} onToggle={() => this.setState({...this.state.profile, home_owner: !this.state.profile.home_owner})}/>
            </td>
            <td className="profilePersonal">
              <Toggle name="car" checked={this.state.profile.car_owner} onToggle={() => this.setState({car_owner: !this.state.profile.car_owner})}/>
            </td>
            <td className="profilePersonal">
              <Toggle name="pet" checked={this.state.profile.pet_owner} onToggle={() => this.setState({pet_owner: !this.state.profile.pet_owner})}/>
            </td>
          </div>
          <div>
            <tr>
              <td className="profilePersonal">
                <p className="profileLabel">Medical |</p>
              </td>
            </tr>
            <tr>
              <td className="profilePersonal">
                <p className="profileLabel">Financial |</p>
              </td>
            </tr>
            <tr>
              <td className="profilePersonal">
                <p className="profileLabel">Misc. |</p>
              </td>
            </tr>
          </div>
          <div>
            <td className="profilePersonal">
              <Toggle name="medical" checked={this.state.profile.medical} onToggle={(value) => this.setState({medical: value})}/>
            </td>
            <td className="profilePersonal">
              <Toggle name="financial" checked={this.state.profile.financial} onToggle={(value) => this.setState({financial: value})}/>
            </td>
            <td className="profilePersonal">
              <Toggle name="misc" checked={this.state.profile.misc} onToggle={(value) => this.setState({misc: value})}/>
            </td>
          </div>
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
}

export default EditProfilePreferences;
