import React, { Component } from 'react';

class ViewPersonalProfile extends Component {
  render() {
    let { first_name, last_name, phone } = this.props.profile
    return (
      <main>
        <div>
          <section className="profileTitle">
            <h2>Personal Info</h2>
            <i className="fas fa-edit fa-2x" onClick={this.props.handlePersonalClick}></i>
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
            <div>
              <tr>
                <td className="profilePersonal">
                  <p className="profileDetail">{first_name}</p>
                </td>
              </tr>
              <tr>
                <td className="profilePersonal">
                  <p className="profileDetail">{last_name}</p>
                </td>
              </tr>
              <tr>
                <td className="profilePersonal">
                  <p className="profileDetail">{phone}</p>
                </td>
              </tr>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default ViewPersonalProfile;
