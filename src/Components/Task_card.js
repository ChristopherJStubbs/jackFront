import React, { Component } from 'react';
import TaskExpansionRow from './TaskExpansionRow'

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
          <td><button onClick={this.handleTaskToggle}>Toggle!</button></td>
        </tr>
        {this.state.on && <TaskExpansionRow info={this.props.info} userID={this.props.userID}/>}
      </tbody>
    );
  }

  handleTaskToggle = () => {
    let { on } = this.state
    on = !on;
    this.setState({on})
  }

  handleSubmit = (task) => {
    alert("Info is being submitted!")
    this.props.handleTaskToggleParent(this.props.info.id)
    
  }

}

export default Task_Card;
