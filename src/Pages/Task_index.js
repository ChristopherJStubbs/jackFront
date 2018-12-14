import React, { Component } from 'react';
import { getTasks, createMyTask } from '../API'
import Task_Card from '../Components/Task_card'



class Task_Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTaskSuccess: false,
      task_index: [],
      my_tasks: []
    }
  }

  render() {
    return (
      <main>
        <section>
          <h1 className="greeting">
          Tasks You Can Add:
          </h1>
        </section>
        <section className="table">
          <div className="bodyContainer">
          {this.state.task_index.map((el, i) => {
            return <Task_Card key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
          })}
          </div>
        </section>
      </main>
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
    })
    this.setState({ newTaskSuccess: true})
  }
}

export default Task_Index;
