import React, { Component } from 'react';
import AuthService from '../services';
import My_Task_Card from '../Components/My_task_card';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { getMyTasks } from '../API';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      tasks: []
    }
  }
  render() {
    console.log(this.state)
    if (this.state.tasks.length >= 1) {
    return (
      <Grid>
       <Row>
         <Col xs={12}>
             <ListGroup>
              {this.state.tasks.map((tasks, index) => {
            return (
              <ListGroupItem
                key={tasks.id}
                header={
                  <Link to={`/apartments/${tasks.id}`}>
                  <h4>
                    <span className='tasks-category'>
                      {tasks.category}
                    </span> - <small className='tasks-subcategory'> {tasks.subcategory} </small>
                    <small className='tasks-title'>
                     {tasks.state} </small>
                    <small className='tasks-description'>
                     {tasks.description} </small>
                  </h4>
                  </Link>
                }>
              </ListGroupItem>
            )
          })}
            </ListGroup>
          </Col>
        </Row>
       </Grid>
       )
     }else {
       return(
         <div>
         Loading your upcoming tasks...
         </div>
       )
     }
   }

   // componentDidMount(){
   //   console.log(this.state.user.id)
   //   getMyTasks(this.state.user.id)
   //   .then((tasks)=> {
   //     console.log(tasks);
   //     this.setState({tasks})
   //   }
   //   )
   // }

}

export default Dashboard;
