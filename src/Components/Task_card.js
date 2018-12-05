import React, { Component } from 'react';

class Task_Card extends Component {
  // constructor(props) {
  //   super(props)
  //   }
  // }
  render() {
    return (
      <div className="Task_Card-Div">
      {this.props.info.title}
      </div>
    );
  }
}

export default Task_Card;
