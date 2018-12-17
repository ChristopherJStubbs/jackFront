import React, { Component } from 'react';

class ViewProfilePreferences extends Component {
  constructor(props){
    super(props)

    this.state ={
      medical: true,
      financial: true,
      misc: true
    }
  }
  render() {
    let { home_owner,car_owner,pet_owner } = this.props
    let { medical,financial,misc} = this.state
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
              <p className="profileDetail">
                {home_owner ? "ON" : "OFF"}
              </p>
            </td>
            <td className="profilePersonal">
              <p className="profileDetail">
                {car_owner ? "ON" : "OFF"}
              </p>
            </td>
            <td className="profilePersonal">
              <p className="profileDetail">
                {pet_owner ? "ON" : "OFF"}
              </p>
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
            <p className="profileDetail">
              {medical ? "ON" : "OFF"}
            </p>
          </td>
          <td className="profilePersonal">
            <p className="profileDetail">
              {financial ? "ON" : "OFF"}
            </p>
          </td>
          <td className="profilePersonal">
            <p className="profileDetail">
              {misc ? "ON" : "OFF"}
            </p>
          </td>
          </div>
        </section>
      </main>
    )
  }
}

export default ViewProfilePreferences;
