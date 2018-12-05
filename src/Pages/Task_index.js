import React, { Component } from 'react';
import { getTasks } from '../API'
import AuthService from '../services'
import Task_Card from '../Components/Task_card'


class Task_Index extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService()
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
      <table>
        <thead>
          <tr>
            <td className="Task_Card_Head">Category</td>
            <td className="Task_Card_Head">Sub-Category</td>
            <td className="Task_Card_Head">Title</td>
            <td className="Task_Card_Head">Description</td>
          </tr>
        </thead>
        <tbody>
        {this.state.task_index.map((el, i) => {
          return <Task_Card key={i} info={el}/>
        })}
        </tbody>
      </table>



    )
  }
}

export default Task_Index;
