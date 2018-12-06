import React, { Component } from 'react';
class Task_Card extends Component {


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

}

export default Task_Card;
