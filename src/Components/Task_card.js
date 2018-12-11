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
        <div onClick={this.handleTaskToggle}>
          <div className="bodyBox box">
          {this.props.info.sub_category}
          {this.props.info.category === "House"
           ? <img src='./images/houseIcon.png'/>
           : <img src='./images/carIcon.png' />
          }
          </div>
          <div className="bodyBox box">
          {this.props.info.title}
          </div>

          <div className="bodyBox box">
            <h5>{this.props.info.description}</h5>
          </div>
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
