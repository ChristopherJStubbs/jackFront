import React, { Component } from 'react';
import AuthService from '../services';
import { getProfile } from '../API';


class TaskExpansionRow extends Component {
  constructor(props){
    super(props)

    this.auth = new AuthService();
    this.state = {
      form: {
        time: '',
        my_task: {
          task_id: this.props.info.id,
          user_id: this.props.userID,
          due_date: '',
          frequency: '',
          completed: false,
          notes: '',
          appointment_attributes: {
            name: '',
            phone_number: '',
            exact_time: ''
          }
        }
      }
    }
  }
  render() {
    console.log(this.state.form);
    console.log(this.props);
    return (
      <tr>
        <td>
          <label>
            Due Date:
          </label>
          <br/>
          <input type="date" name="due_date" onChange={this.handleMyTaskChange} required/>
        </td>
        <br/>
        <td>
          <label>
            Time (PST):
          </label>
          <br/>
          <input type="time" name="time" onChange={this.handleFormChange} required/>
        </td>
        <br/>
        <td>
          <label>
            How often (days)?:
          </label>
          <br/>
          <input type="number" name="frequency" onChange={this.handleMyTaskChange} pattern="[0-9]" required/>
        </td>
        <br/>
        <td>
          <button onClick={this.handleSubmit}>Accept!</button>
        </td>
      </tr>
    );
  }

  componentDidMount() {
    let { form } = this.state
    getProfile(this.auth.getUserId())
    .then (resp => {
      console.log(resp);
      form.my_task.appointment_attributes.name = resp.first_name
      form.my_task.appointment_attributes.phone_number = resp.phone
  })
    this.setState({form})
  }

  handleMyTaskChange = (e) => {
    console.log(e.target.name);
    let { form } = this.state
    form.my_task[e.target.name] = e.target.value
    this.setState({form})
  }

  handleFormChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form})
  }


  handleSubmit = (e) => {
    e.preventDefault()
    let { form } = this.state
    form.my_task.appointment_attributes.exact_time = `${form.my_task.due_date}T${form.time}:00.000Z`
    console.log(form);
    this.props.handleNewMyTaskObject(form)
    this.props.toggle()
  }

}

export default TaskExpansionRow;
