import React, { Component } from 'react';

class TaskExpansionRow extends Component {
  constructor(props){
    super(props)

    this.state = {
      form: {
        task_id: this.props.info.id,
        user_id: this.props.userID,
        due_date: '',
        frequency: '',
        status: false,
        notes: ''
      }
    }
  }
  render() {
    console.log(this.state.form);
    return (
      <tr>
        <td><label>Due Date</label><input type="date" name="due_date" onChange={this.handleChange} /></td>
        <td><label>How often (days)?</label><input type="number" name="frequency" onChange={this.handleChange} pattern="[0-9]"/></td>
        <td><button onClick={this.handleSubmit}>Accept!</button></td>
      </tr>
    );
  }

  handleChange = (e) => {
    console.log(e.target.name);
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
  }

}

export default TaskExpansionRow;
