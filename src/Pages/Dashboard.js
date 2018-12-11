import React, { Component } from 'react';
import AuthService from '../services';
import My_Task_Card from '../Components/My_task_card';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      myTasks: [],
    }
  }

  render = () => {
    let { myTasks } = this.props
    let today = new Date()
    let homeTasks = myTasks.filter(el => el.task.category == "House")
    let carTasks = myTasks.filter(el => el.task.category == "Car")
    let todayTasks = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp == this.addDays(today,0)
    })
    let next30Days = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp < this.addDays(today,30)
    })
    let next3Months = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp < this.addDays(today,90)
    })
    if (myTasks.length >= 1) {
    return (
      <section className="table">
        <main className="">
        <div className="testing">
          <Tabs defaultActiveKey={1} className="tabsContainer">
            <Tab eventKey={1} title="Today">
              <h2>Today</h2>
              {todayTasks.length > 0
               ?  todayTasks.map((el, i) => {
                    return <My_Task_Card key={i} info={el} />
                    })
               : <h3>There are no tasks here.</h3>
              }
            </Tab>
            <Tab eventKey={2} title="Next 30 Days">
              <h2>Next 30 Days</h2>
              {next30Days.length > 0
               ?  next30Days.map((el, i) => {
                    return <My_Task_Card key={i} info={el} />
                    })
               : <h3>There are no tasks here.</h3>
              }
            </Tab>
            <Tab eventKey={3} title="Next 3 Months">
              <h2>Next 3 Months</h2>
              {next3Months.length > 0
               ?  next3Months.map((el, i) => {
                    return <My_Task_Card key={i} info={el} />
                    })
               : <h3>There are no tasks here.</h3>
              }
            </Tab>
            <Tab eventKey={4} title="Home Tasks">
              {homeTasks.length > 0
               ?  homeTasks.map((el, i) => {
                    return <My_Task_Card key={i} info={el} />
                    })
               : <h3>There are no tasks here.</h3>
              }
            </Tab>
            <Tab eventKey={5} title="Car Tasks">
              {carTasks.length > 0
               ?  carTasks.map((el, i) => {
                    return <My_Task_Card key={i} info={el} />
                    })
               : <h3>There are no tasks here.</h3>
              }
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

   addDays = function(today, days) {
     // task = this.props.due_date value
     let date = new Date()
     date.setDate(today.getDate() + days);
     return date;
   }

}

export default Dashboard;


//<Moment add={{days:30}}>{date} </Moment>

// if (this.props.myTasks.due_date <= today's date + 30)
