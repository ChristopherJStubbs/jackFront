import React, { Component } from 'react';

class TaskExpansionRow extends Component {
  constructor(props){
    super(props)

    this.state = {
      form: {
        my_task: {
          task_id: this.props.info.id,
          user_id: this.props.userID,
          due_date: '',
          frequency: '',
          completed: false,
          notes: ''
        }
      }
    }
  }
  render() {
    console.log(this.state.form);
    return (
      <tr>
        <td>
          <label>
            Due Date:
          </label>
          <br/>
          <input type="date" name="due_date" onChange={this.handleChange} required/>
        </td>
        <br/>
        <td>
          <label>
            How often (days)?:
          </label>
          <br/>
          <input type="number" name="frequency" onChange={this.handleChange} pattern="[0-9]" required/>
        </td>
        <br/>
        <td>
          <button onClick={this.handleSubmit}>Accept!</button>
        </td>
      </tr>
    );
  }

  handleChange = (e) => {
    console.log(e.target.name);
    let { form } = this.state
    form.my_task[e.target.name] = e.target.value
    this.setState({form})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.form);
    this.props.handleNewMyTaskObject(this.state.form)
    this.props.toggle()
  }

}

export default TaskExpansionRow;
