import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class My_Task_Card extends Component {
  render() {
    return (
      <div className="tile">
        <div className="tileLinks">
          <a href={`/user/my_tasks/${this.props.info.my_task.id}/edit`} title="Edit">
            <i class="fas fa-edit fa-2x"></i>
          </a>
          <a>
            <i class="far fa-check-square fa-2x" title="Complete"></i>
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
}

export default My_Task_Card;
