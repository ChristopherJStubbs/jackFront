import React, { Component } from 'react';
import { getTasks, createMyTask } from '../API'
import Task_Card from '../Components/Task_card'



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
      <section className="table">
        <main className="bodyContainer">
        {this.state.task_index.map((el, i) => {
          return <Task_Card key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
        })}
        </main>
      </section>
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
    createMyTask(newMyTaskObject)
    .then(resp => {
      console.log(resp);
    })
  }
}

export default Task_Index;
