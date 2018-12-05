import React, { Component } from 'react';

class Task_Card extends Component {
  // constructor(props) {
  //   super(props)
  //   }
  // }
  render() {
    return (
      <tr>
        <td className="Task_Card-Div">{this.props.info.category}</td>
        <td className="Task_Card-Div">{this.props.info.sub_category}</td>
        <td className="Task_Card-Div">{this.props.info.title}</td>
        <td className="Task_Card-Div">{this.props.info.description}</td>
      </tr>
    );
  }
}

export default Task_Card;
