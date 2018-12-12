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
        <div>
          <div className="bodyBox box">
            <div className="CatInfoContainer">
                {this.props.info.sub_category}
              <i class={this.iconChooser(this.props.info.category)}></i>
            </div>
            <hr/>
          </div>
          <div className="bodyBox box TileTitle">
          {this.props.info.title}
          </div>
          <div className="bodyBox box TileDescription">
            <h5>{this.props.info.description}</h5>
          </div>
          {this.state.on == false && <AddButton toggle={this.handleTaskToggle}/>}
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

  iconChooser = (category) => {
    console.log(category);
    let iconArray = ["fas fa-home fa-2x", "fas fa-car fa-2x", "fas fa-user-md fa-2x", "fas fa-paw fa-2x", "fa-question-circle fa-2x", "fa-money-bill fa-2x"]
    if (category === "House") {
      return iconArray[0]
    } else if (category === "Car") {
      return iconArray[1]
    } else if (category === "Medical") {
      return iconArray[2]
    } else if (category === "Pet") {
      return iconArray[3]
    } else if (category === "Miscellaneous") {
      return iconArray[4]
    } else if (category === "Money") {
      return iconArray[4]
    }
  }

}

export default Task_Card;
