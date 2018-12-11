import React, { Component } from 'react';

class My_Task_Card extends Component {
  render() {
    return (
      <div className="tile">
        <div className="bodyBox box">
          {this.props.info.my_task.task_id}
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
