import React, { Component } from 'react';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Dashboard from './Pages/Dashboard.js'
// import Edit_Tasks from './Pages/Edit_tasks.js'
import Home from './Pages/Home.js'
import My_Tasks from './Pages/My_tasks.js'
import Registration from './Pages/Registration.js'
import Sign_In from './Pages/Sign_in.js'
import Task_Index from './Pages/Task_index.js'
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthService from './services'
import { getMyTasks } from './API';
import Appointments from './Pages/Appointments'
import AptForm from './Pages/aptForm'


class App extends Component {
    constructor(props) {
      super(props)

      this.auth = new AuthService()
      this.state = {
        hasToken: false,
        myTasks: [],
        userID: ''
      }
    }

  render() {
    return (
      <div className="b">
        <Header />
        <div>
          <Router>
            {
              (this.auth.loggedIn()) ?
              <Switch> //protected paths
                <Redirect from="/register" to="/" />
                <Route exact path='/user/my_tasks/:id' component={My_Tasks} />
                <Route path='/tasks' render={(props) => <Task_Index userID={this.state.userID} />} />
                <Route exact path='/appointments' component={Appointments} />
                <Route path='/appointments/new' component={AptForm} />
                <Route path='/' render={(props) => <Dashboard myTasks={this.state.myTasks} />} />
              </Switch>

              :
              <Switch> //public paths
                <Route exact path='/login' render={(props) => <Sign_In refresh={this.refresh}/>} />
                <Route exact path='/register' render={(props) => <Registration refresh={this.refresh}/> }/>
                <Route path='/' component={Home} />
              </Switch>
            }
          </Router>
        </div>
        <footer >
          <Footer />
        </footer>
      </div>
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

  refresh = () => {
    this.setState ({
      authenticated: this.auth.loggedIn()
    })
  }
}

export default App;

// <Route exact path='/login' render={(props) => <Sign_in checkForToken={this.checkForToken}/>} />
