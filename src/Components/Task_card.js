import React, { Component } from 'react';
import TaskExpansionRow from './TaskExpansionRow'
import { FormGroup, Checkbox } from 'react-bootstrap';


class Task_Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      my_tasks:[],
      on: false,
    }
  }
  render() {
    return (
      <tbody>
        <tr>
          <td className="Task_Card-Div">{this.props.info.id}</td>
          <td className="Task_Card-Div">{this.props.info.category}</td>
          <td className="Task_Card-Div">{this.props.info.sub_category}</td>
          <td className="Task_Card-Div">{this.props.info.title}</td>
          <td className="Task_Card-Div">{this.props.info.description}</td>
          <td><FormGroup><Checkbox onChange={this.handleTaskToggle} inline></Checkbox></FormGroup></td>
        </tr>
        {this.state.on && <TaskExpansionRow info={this.props.info} userID={this.props.userID} handleNewMyTaskObject={this.props.handleNewMyTaskObject}/>}
      </tbody>
    );
  }

  handleTaskToggle = () => {
    let { on } = this.state
    on = !on;
    this.setState({on})
  }

}

export default Task_Card;
