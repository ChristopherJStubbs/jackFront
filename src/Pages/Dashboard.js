import React, { Component } from 'react';
import AuthService from '../services';
import My_Task_Card from '../Components/My_task_card';
import { Tabs, Tab } from 'react-bootstrap';
import { getMyTasks } from '../API'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      myTasks: [],
      activeTab: 0
    }
  }

  render(){
    let stillLoading = true;
    let { myTasks } = this.state
    let today = new Date()
    let homeTasks = myTasks.filter(el => el.task.category === "House")
    let carTasks = myTasks.filter(el => el.task.category === "Car")
    let todayTasks = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp.getUTCDate() === today.getUTCDate()
    })

    let next30Days = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp.getUTCDate() < this.addDays(today,30).getUTCDate()
    })
    let next3Months = myTasks.filter((el) => {
      let temp = new Date(el.my_task.due_date)
      return temp.getUTCDate() < this.addDays(today,90).getUTCDate()
    })
    return (
      <main className="table">
        <section className="testing DashboardContainer">
            <section className="tabsContainer">
                <div onClick={() => this.tabClick(0)} className="dashboardTab todayTab">
                  Today
                </div>
                <div onClick={() => this.tabClick(1)} className="dashboardTab">
                  Next 30 Days
                </div>
                <div onClick={() => this.tabClick(2)} className="dashboardTab">
                  Next 3 Months
                </div>
                <div onClick={() => this.tabClick(3)} className="dashboardTab">
                  Home Tasks
                </div>
                <div onClick={() => this.tabClick(4)} className="dashboardTab">
                  Car Tasks
                </div>
                <div onClick={() => this.tabClick(5)} className="dashboardTab">
                  All My Tasks
                </div>
            </section>
        </section>

        <section className="tilesContainer">
        {(() => {
                switch(this.state.activeTab) {
                  case 0:
                    return todayTasks.length > 0
                      ?  todayTasks.map((el, i) => {
                          return <My_Task_Card key={i} info={el} />
                         })
                      : <h3>Today Switch.</h3>
                  case 1:
                    return next30Days.length > 0
                      ?  next30Days.map((el, i) => {
                        return <My_Task_Card key={i} info={el} />
                      })
                      : <h3>30 Days Switch.</h3>
                  case 2:
                    return next3Months.length > 0
                      ?  next3Months.map((el, i) => {
                        return <My_Task_Card key={i} info={el} />
                        })
                      : <h3>90 Days.</h3>
                  case 3:
                    return homeTasks.length > 0
                      ?  homeTasks.map((el, i) => {
                        return <My_Task_Card key={i} info={el} />
                      })
                      : <h3>Home.</h3>
                  case 4:
                    return carTasks.length > 0
                      ?  carTasks.map((el, i) => {
                        return <My_Task_Card key={i} info={el} />
                      })
                      : <h3>Car.</h3>
                  case 5:
                    return myTasks.length > 0
                      ?  myTasks.map((el, i) => {
                        return <My_Task_Card key={i} info={el} />
                      })
                      : <h3>All myTasks.</h3>
                }
            })()}

        </section>
      </main>
    );
   }

   componentDidMount = () => {
     let thisUserID = this.auth.getUserId()
     if (thisUserID !== null && thisUserID !== undefined && thisUserID.length > 0) {
       getMyTasks(thisUserID)
     .then((APImyTasks)=> {
       // let { myTasks } = this.state
       this.setState({
         myTasks: APImyTasks,
         userID: thisUserID
       })
       }
       )
     }
   }

   addDays = function(today, days) {
     let date = new Date()
     date.setDate(today.getDate() + days);
     return date;
   }

   tabClick = (tabNum) => {
     this.setState({
       activeTab: tabNum
     })
     console.log(tabNum);
   }

}

export default Dashboard;
