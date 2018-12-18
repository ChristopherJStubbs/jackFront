import React, { Component } from 'react';

class ViewPersonalProfile extends Component {
  render() {
    let { first_name, last_name, phone } = this.props.profile
    return (
      <main>
        <section className="profileTitle">
          <h2>Personal Info</h2>
          <i className="fas fa-edit fa-2x icon" onClick={this.props.handlePersonalClick}></i>
        </section>

        <hr/>

        <section id="profileSection">
          <section className="column">
            <p className="profileLabel">
              First Name:
            </p>
            <p className="profileLabel">
              Last Name:
            </p>
            <p className="profileLabel">
              Phone:
            </p>
          </section>
          <section className="column">
            <p className="profileLabel">
              {first_name}
            </p>
            <p className="profileLabel">
              {last_name}
            </p>
            <p className="profileLabel">
              {phone}
            </p>
          </section>
        </section>
      </main>
    )
  }
  componentDidMount(){
    this.props.refresh()
  }
}

export default ViewPersonalProfile;
