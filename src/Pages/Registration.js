import React, { Component } from 'react';

class Registration extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <legend>Registration</legend>
            <div className="form-group">
              <label for="email" className="col-lg-2 control-label">Email</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="email" placeholder="test@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label for="password" className="col-lg-2 control-label">Password</label>
              <div className="col-lg-10">
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label for="first_name" className="col-lg-2 control-label">First Name</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="first_name" placeholder="First Name" />
              </div>
            </div>
            <div className="form-group">
              <label for="last_name" className="col-lg-2 control-label">Last Name</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="last_name" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label for="phone" className="col-lg-2 control-label">Phone</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="phone" placeholder="(800)555-5555" />
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Home?
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Car?
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Registration;
