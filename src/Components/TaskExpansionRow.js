import React, { Component } from 'react';
import AuthService from '../services';
import AcceptButton from './AcceptButton'
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
          exact_time: '',
        }
      }
    }
  }

  render() {
    console.log(this.state.form);
    return (
      <tr className="expansionContainer">
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
            Time:
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
            <AcceptButton accept={this.handleSubmit} />
        </td>
      </tr>
    );
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
    form.my_task.exact_time = `${form.my_task.due_date}T${form.time}:00.000Z`
    console.log(form);
    this.props.handleNewMyTaskObject(form)
    this.props.toggle()
  }

}

export default TaskExpansionRow;
