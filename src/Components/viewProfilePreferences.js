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
          <i className="fas fa-edit fa-2x icon" onClick={this.props.handlePreferencesClick}></i>
        </section>

        <hr/>

        <section id="profileSection">
          <section className="column">
            <p className="profileLabel">
              Home:
              <hr/>
              {home_owner ? "ON" : "OFF"}
            </p>
            <p className="profileLabel">
              Car:
              <hr/>
              {car_owner ? "ON" : "OFF"}
            </p>
            <p className="profileLabel">
              Pets:
              <hr/>
              {pet_owner ? "ON" : "OFF"}
            </p>
          </section>
          <section className="column">
            <p className="profileLabel">
              Medical:
              <hr/>
              {medical ? "ON" : "OFF"}
            </p>
            <p className="profileLabel">
              Financial:
              <hr/>
              {financial ? "ON" : "OFF"}
            </p>
            <p className="profileLabel">
              Misc:
              <hr/>
              {misc ? "ON" : "OFF"}
            </p>
          </section>
        </section>
      </main>
    )
  }
}

export default ViewProfilePreferences;
