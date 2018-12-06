import React, { Component } from 'react';
class Task_Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      my_tasks:[]
    }
    }
  }
  render() {
    return (
      <tr>
        <td className="Task_Card-Div">{this.props.info.id}</td>
        <td className="Task_Card-Div">{this.props.info.category}</td>
        <td className="Task_Card-Div">{this.props.info.sub_category}</td>
        <td className="Task_Card-Div">{this.props.info.title}</td>
        <td className="Task_Card-Div">{this.props.info.description}</td>
        <td><button onChange={() => this.handleTaskToggle(this.props.info.id)}>ToggleMe!</button></td>
      </tr>
    );
  }

  handleTaskToggle = (task) => {
    let { my_tasks } = this.state
    let tempTask = this.my_tasks
    tempTask.push(task)
    this.setState ({
      my_tasks: tempTask
    })
  }





}

export default Task_Card;
