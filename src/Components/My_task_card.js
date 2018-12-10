import React, { Component } from 'react';

class My_Task_Card extends Component {
  render() {
    return (
      <div className="My_Task_Card-Div">
      {this.props.info.my_task.id}:
      {this.props.info.task.description}
      </div>
    );
  }
}

export default My_Task_Card;
