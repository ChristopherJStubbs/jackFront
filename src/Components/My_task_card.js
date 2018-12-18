import React, { Component } from 'react';
import { editMyTask } from '../API'

class My_Task_Card extends Component {
  render() {
    return (
      <div id="myTaskTile" className="myTaskTile">
          <div className="bodyBox">
            <div className="CatInfoContainer">
              <i class={this.iconChooser(this.props.info.task.category)}></i>
              {this.props.info.task.sub_category}
            </div>
            <hr className="myTaskTopHR"/>
          </div>
          <div className="bodyBox TileTitle">
            {this.props.info.task.title}
          </div>
          <div className="bodyBox TileDescription">
            {this.props.info.task.description}
          </div>
          <hr className="myTaskHR"/>
          <div className="bodyBox tileInformation">
            <span className="myTaskSpan">Notes:</span> {this.props.info.my_task.notes}
          </div>
          <div className="bodyBox tileInformation">
            <span className="myTaskSpan">Due date:</span> {this.props.info.my_task.due_date}
          </div>
          <div className="bodyBox tileInformation" id="frequency">
            <span className="myTaskSpan">Frequency:</span> {this.props.info.my_task.frequency} days
          </div>

          <div className="tileLinks">
            <a href={`/user/my_tasks/${this.props.info.my_task.id}/edit`} title="Edit">
              <i className="fas fa-edit fa-2x"></i>
            </a>
            <div onClick={this.handleComplete}>
              <i className="far fa-check-square fa-2x" title="Complete"></i>
            </div>
          </div>
      </div>
    );
  }
  handleComplete = (e) => {
    e.preventDefault()
    const { id, task_id, user_id, due_date, completed, frequency, notes } = this.props.info.my_task
    this.props.addDays(due_date, frequency)
    const mytask = {
      id: id,
      task_id: task_id,
      user_id: user_id,
      due_date: this.props.addDays(due_date, frequency),
      completed: completed,
      frequency: frequency,
      notes: notes
    }
    editMyTask(mytask)
    .then(resp => {
      console.log(resp);
    })
  }

  iconChooser = (category) => {
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

export default My_Task_Card;
