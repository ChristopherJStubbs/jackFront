import React, { Component } from 'react';
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
      
        <tr>
          <td className="Task_Card-Div">{this.props.info.id}</td>
          <td className="Task_Card-Div">{this.props.info.category}</td>
          <td className="Task_Card-Div">{this.props.info.sub_category}</td>
          <td className="Task_Card-Div">{this.props.info.title}</td>
          <td className="Task_Card-Div">{this.props.info.description}</td>
          <td><button onClick={this.handleTaskToggle}>Toggle!</button></td>
          {this.state.on && <td><button onClick={() => this.handleSubmit(this.props.info.id)}>Accept!</button></td>}
        </tr>
    );
  }

  handleSubmit(task) {
    alert("Info is being submitted!")
    this.props.handleTaskToggleParent(this.props.info.id)

  }

  handleTaskToggle = () => {
    let { on } = this.state
    on = !on;
    this.setState({on})
  }

}

export default Task_Card;
