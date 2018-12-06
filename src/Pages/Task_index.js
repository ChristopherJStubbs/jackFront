import React, { Component } from 'react';
import { getTasks } from '../API'
import Task_Card from '../Components/Task_card'
import { Table } from 'react-bootstrap';



class Task_Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_index: [],
      my_tasks: []
    }
  }

  render() {
    console.log(this.state.my_tasks);
    return (
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th className="Task_Card_Head">TASK_ID</th>
            <th className="Task_Card_Head">Category</th>
            <th className="Task_Card_Head">Sub-Category</th>
            <th className="Task_Card_Head">Title</th>
            <th className="Task_Card_Head">Description</th>
            <th className="Task_Card_Head">Subcribed</th>
            <th className="Task_Card_Head"></th>
          </tr>
        </thead>
        {this.state.task_index.map((el, i) => {
          return <Task_Card key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
        })}
      </Table>
    );
  }

  componentDidMount() {
    getTasks()
    .then(APItasks => {
      this.setState({
        task_index: APItasks
      })
    })
  }

  handleNewMyTaskObject = (newMyTaskObject) => {
    // console.log(newMyTaskObject);
     let { my_tasks } = this.state
     let tempTask = my_tasks // <------------------------------------   ?????????
     tempTask.push(newMyTaskObject)
     this.setState ({
       my_tasks: tempTask
     })
  }
}

export default Task_Index;
