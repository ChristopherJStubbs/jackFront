import React, { Component } from 'react';
import { getTasks } from '../API'
import Task_Card from '../Components/Task_card'
import { Table } from 'react-bootstrap';



class Task_Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_index: []
    }
  }

      componentDidMount() {
        getTasks()
        .then(APItasks => {
          this.setState({
            task_index: APItasks
          })
        })
      }


  render() {
    console.log(this.state.task_index);
    return (
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th className="Task_Card_Head">TASK_ID</th>
            <th className="Task_Card_Head">Category</th>
            <th className="Task_Card_Head">Sub-Category</th>
            <th className="Task_Card_Head">Title</th>
            <th className="Task_Card_Head">Description</th>
            <th className="Task_Card_Head"></th>
            <th className="Task_Card_Head"></th>
          </tr>
        </thead>
        <tbody>
        {this.state.task_index.map((el, i) => {
          return <Task_Card key={i} info={el} handleTaskToggleParent={this.handleTaskToggleParent}/>
        })}
        </tbody>
      </Table>
    );
  }

  handleTaskToggleParent(taskCardID) {
     let { my_tasks } = this.state
     let tempTask = this.my_tasks
     tempTask.push(taskCardID)
     this.setState ({
       my_tasks: tempTask
     })
  }
}

export default Task_Index;
