import React, { Component } from 'react';
import TaskExpansionRow from './TaskExpansionRow'
import AddButton from './AddButton'

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
            <div className="CatInfoContainer">
                {this.props.info.sub_category}
              <i class="fas fa-home fa-2x"></i>
            </div>
            <hr/>
          </div>
          <div className="bodyBox box TileTitle">
          {this.props.info.title}
          </div>

          <div className="bodyBox box TileDescription">
            <h5>{this.props.info.description}</h5>
          </div>
          {this.state.on == false && <AddButton />}
        </div>
        {this.state.on && <TaskExpansionRow info={this.props.info} userID={this.props.userID} handleNewMyTaskObject={this.props.handleNewMyTaskObject} toggle={this.handleTaskToggle}/>}
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
