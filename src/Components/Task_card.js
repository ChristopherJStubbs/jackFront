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
      <div className="tile">
        <div className="bodyBox box">
          {this.props.info.id}
        </div>
        <div className="bodyBox box">
        {this.props.info.title}
        </div>
        <div className="bodyBox box">
        {this.props.info.category}:          {this.props.info.sub_category}
        </div>
        <div className="bodyBox box">
          {this.props.info.description}
        </div>
        <div><FormGroup><Checkbox onChange={this.handleTaskToggle} inline></Checkbox></FormGroup>
        </div>
        {this.state.on && <TaskExpansionRow info={this.props.info} userID={this.props.userID} handleNewMyTaskObject={this.props.handleNewMyTaskObject}/>}
      </div>
    );
  }

  handleTaskToggle = () => {
    let { on } = this.state
    on = !on;
    this.setState({on})
  }

}

export default Task_Card;
