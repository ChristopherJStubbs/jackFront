import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { editMyTask } from '../API'

class My_Task_Card extends Component {
  render() {
    return (
      <div className="tile">
        <div className="tileLinks">
          <a href={`/user/my_tasks/${this.props.info.my_task.id}/edit`} title="Edit">
            <i className="fas fa-edit fa-2x"></i>
          </a>
          <a onClick={this.handleComplete}>
            <i className="far fa-check-square fa-2x" title="Complete"></i>
          </a>
        </div>
        <div className="bodyBox box">
          {this.props.info.my_task.task_id}
        </div>
        <div className="bodyBox box">
          {this.props.info.my_task.id}
        </div>
        <div className="bodyBox box">
        {this.props.info.task.title}
        </div>
        <div className="bodyBox box">
        {this.props.info.task.category}:          {this.props.info.task.sub_category}
        </div>
        <div className="bodyBox box">
          {this.props.info.task.description}
        </div>
        <div className="bodyBox box">
        {this.props.info.my_task.due_date}
        </div>
        <div className="bodyBox box">
        {this.props.info.my_task.frequency}
        </div>
        <div className="bodyBox box">
        {this.props.info.my_task.notes}
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
}

export default My_Task_Card;
