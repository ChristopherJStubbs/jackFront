import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import AuthService from '../services'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.auth= new AuthService()
    this.state = {
      submitted: false,
      form: {
        user: {
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          phone: '',
          home_owner: '',
          car_owner: ''
        }
      }
    }
  }
  render() {
    console.log(this.state.form.user)
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <legend>Registration</legend>
            <div className="form-group">
              <label for="email" className="col-lg-2 control-label">Email</label>
              <div className="col-lg-10">
                <input onChange={this.handleChange} type="text" className="form-control" id="email" placeholder="test@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label for="password" className="col-lg-2 control-label">Password</label>
              <div className="col-lg-10">
                <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label for="first_name" className="col-lg-2 control-label">First Name</label>
              <div className="col-lg-10">
                <input onChange={this.handleChange} type="text" className="form-control" id="first_name" placeholder="First Name" />
              </div>
            </div>
            <div className="form-group">
              <label for="last_name" className="col-lg-2 control-label">Last Name</label>
              <div className="col-lg-10">
                <input onChange={this.handleChange} type="text" className="form-control" id="last_name" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label for="phone" className="col-lg-2 control-label">Phone</label>
              <div className="col-lg-10">
                <input onChange={this.handleChange} type="text" className="form-control" id="phone" placeholder="(800)555-5555" />
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input onChange={this.handleChange} type="checkbox" /> Home?
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input onChange={this.handleChange} type="checkbox" /> Car?
              </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </fieldset>
        </form>
        {this.state.submitted && <Redirect to="/"/>}
      </div>
    )
  }

  handleChange = (e) => {
    e.preventDefault()
    let { form } = this.state
    form.user[e.target.id] = e.target.value
    console.log(this.state.form.user)
    this.setState({ form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.auth.register(this.state.form)
    .then(status => {
      if(status.errors){
        console.log(status.errors.status);
        this.setState({ submitted: false })
      }else{
        this.auth.sign_in(this.state.form)
        this.setState({ submitted: true })
      }
    })
  }


}

export default Registration;
