import React, { Component } from 'react';
import AuthService from '../services'
import { getProfile } from '../API'
import { FormGroup, Radio } from 'react-bootstrap';
import ViewPersonalProfile from '../Components/viewPersonalProfile'
import EditPersonalProfile from '../Components/editPersonalProfile'
import ViewProfilePreferences from '../Components/viewProfilePreferences'
import EditProfilePreferences from '../Components/editProfilePreferences'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.auth= new AuthService()
    this.state = {
      editPersonal: false, //toggles from view to edit if true
      editPreferences: false, //toggles from view to edit if true
      profile: {
        id: '',
        first_name: '',
        last_name: '',
        phone: '',
        home_owner: '',
        car_owner: '',
        pet_owner: '',
      }
    }
  }
  render() {
    console.log(this.state);
    let { first_name, last_name, phone, home_owner, car_owner, pet_owner } = this.state.profile
    return (
      <main>
        <h1 className="greeting">My Profile</h1>
        <section className="profileContainer">
          <div className="profilePersonal">
            {this.state.editPersonal
              ? <EditPersonalProfile
                  profile={this.state.profile}
                  handlePersonalClick={this.handlePersonalClick}
                  refresh={this.props.refresh}
                />
              : <ViewPersonalProfile
                  profile={this.state.profile}
                  handlePersonalClick={this.handlePersonalClick}
                  refresh={this.props.refresh}
                />
            }

          </div>
          <div className="profilePreferences">
            {this.state.editPreferences
              ? <EditProfilePreferences
                  profile={this.state.profile}
                  handlePersonalClick={this.handlePersonalClick}
                  refresh={this.props.refresh}
                />
              : <ViewProfilePreferences
                home_owner={home_owner}
                car_owner={car_owner}
                pet_owner={pet_owner}
                handlePreferencesClick={this.handlePreferencesClick}
                refresh={this.props.refresh}
              />
            }

          </div>
        </section>
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

  handlePersonalClick = () => {
    this.setState({editPersonal: !this.state.editPersonal})
  }

  handlePreferencesClick = () => {
    this.setState({editPreferences: !this.state.editPreferences})
  }
}

export default Profile;
