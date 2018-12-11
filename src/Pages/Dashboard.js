import React, { Component } from 'react';
import AuthService from '../services';
import My_Task_Card from '../Components/My_task_card';
import { Tabs, Tab } from 'react-bootstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      myTasks: [],
      activeTab: 0
    }
  }

  render = () => {
    let { myTasks } = this.props
    let today = new Date()
    console.log(today);
    let homeTasks = myTasks.filter(el => el.task.category === "House")
    let carTasks = myTasks.filter(el => el.task.category === "Car")
    let todayTasks = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      temp = temp.getDate()+1)
      console.log(temp);
      return temp === today
    })
    console.log(todayTasks);
    console.log(myTasks);
    let next30Days = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp < this.addDays(today,30)
    })
    let next3Months = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp < this.addDays(today,90)
    })
    if (myTasks.length > 0) {
    return (
      <main className="table">
        <section className="testing DashboardContainer">
            <section className="tabsContainer">
              <a href="#">
                <div className="dashboardTab todayTab">
                  Today
                </div>
              </a>
              <a href="#">
                <div className="dashboardTab">
                  Next 30 Days
                </div>
              </a>
              <a href="#">
                <div className="dashboardTab">
                  Next 3 Months
                </div>
              </a>
              <a href="#">
                <div className="dashboardTab">
                  Home Tasks
                </div>
              </a>
              <a href="#">
                <div className="dashboardTab">
                  Car Tasks
                </div>
              </a>
            </section>
        </section>

        <section>
          {this.state.activeTab === 0 &&
            todayTasks.length > 0

              ? // ?  todayTasks.map((el, i) => {
                console.log("true")
              //   return <My_Task_Card key={i} info={el} />
              // })
              : console.log("false")
              // : <h3>There are no tasks here.</h3>
          }
        </section>
      </main>
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

// <Tabs defaultActiveKey={1} className="tabsContainer">
// <Tab eventKey={1} title="Today">
// <h2>Today</h2>
// {todayTasks.length > 0
//   ?  todayTasks.map((el, i) => {
//     return <My_Task_Card key={i} info={el} />
//   })
//   : <h3>There are no tasks here.</h3>
// }
// </Tab>
// <Tab eventKey={2} title="Next 30 Days">
// <h2>Next 30 Days</h2>
// {next30Days.length > 0
//   ?  next30Days.map((el, i) => {
//     return <My_Task_Card key={i} info={el} />
//   })
//   : <h3>There are no tasks here.</h3>
// }
// </Tab>
// <Tab eventKey={3} title="Next 3 Months">
// <h2>Next 3 Months</h2>
// {next3Months.length > 0
//   ?  next3Months.map((el, i) => {
//     return <My_Task_Card key={i} info={el} />
//   })
//   : <h3>There are no tasks here.</h3>
// }
// </Tab>
// <Tab eventKey={4} title="Home Tasks">
// {homeTasks.length > 0
//   ?  homeTasks.map((el, i) => {
//     return <My_Task_Card key={i} info={el} />
//   })
//   : <h3>There are no tasks here.</h3>
// }
// </Tab>
// <Tab eventKey={5} title="Car Tasks">
// {carTasks.length > 0
//   ?  carTasks.map((el, i) => {
//     return <My_Task_Card key={i} info={el} />
//   })
//   : <h3>There are no tasks here.</h3>
// }
// </Tab>
// </Tabs>
