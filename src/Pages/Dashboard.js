import React, { Component } from 'react';
import AuthService from '../services';
import My_Task_Card from '../Components/My_task_card';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      tasks: [],
    }
  }

  addDays = function(days) {
    // task = this.props.due_date value
    let date = new Date()
    date.setDate(date.getDate() + days);
    return date;
  }

  render() {
    if (true) {
    return (
      <section className="table">
        <main className="">
        <div className="testing">
          <Tabs defaultActiveKey={1} className="tabsContainer">
            <Tab eventKey={1} title="Next 30 Days">
              {this.props.myTasks.map((el, i) => {
                console.log(el.my_task.due_date);
                console.log(this.addDays(el.my_task.frequency));
                return <My_Task_Card key={i} info={el} />
              })}
            </Tab>
            <Tab eventKey={2} title="Next 3 Months">
              {this.props.myTasks.map((el, i) => {
                return <My_Task_Card key={i} info={el} />
              })}
            </Tab>
            <Tab eventKey={3} title="Home Tasks">
              {this.props.myTasks.map((el, i) => {
                return <My_Task_Card key={i} info={el} />
              })}
            </Tab>
            <Tab eventKey={4} title="Car Tasks">
              {this.props.myTasks.map((el, i) => {
                return <My_Task_Card key={i} info={el} />
              })}
            </Tab>
          </Tabs>
          </div>
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


//<Moment add={{days:30}}>{date} </Moment>

// if (this.props.myTasks.due_date <= today's date + 30)
