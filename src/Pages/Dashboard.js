import React, { Component } from 'react';
import AuthService from '../services';
import My_Task_Card from '../Components/My_task_card';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      tasks: []
    }
  }
  render() {
    console.log(this.props.myTasks)
    if (true) {
    return (
      <section className="table">
        <main className="bodyContainer">
        {this.props.myTasks.map((el, i) => {
          return <My_Task_Card key={i} info={el} />
        })}
        </main>
      </section>
    )
     } else {
       return(
         <div>
         Go to "All Tasks" page in order to assign yourself some tasks!
         </div>
       )
     }
   }

}

export default Dashboard;
