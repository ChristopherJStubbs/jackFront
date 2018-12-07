import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Dashboard from './Pages/Dashboard.js'
import Edit_Tasks from './Pages/Edit_tasks.js'
import Home from './Pages/Home.js'
import My_Tasks from './Pages/My_tasks.js'
import Registration from './Pages/Registration.js'
import Sign_In from './Pages/Sign_in.js'
import Task_Index from './Pages/Task_index.js'
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthService from './services'

class App extends Component {
    constructor(props) {
      super(props)

      this.auth = new AuthService()
      this.state = {
        hasToken: false,
        task_index: [],
        userID: ''
      }
    }

  render() {
    console.log(this.state.userID);
    return (
      <div className="App text-danger">
      <Header />
        <div>
        <Router>
        {(this.auth.loggedIn())
        ?<Switch> //protected paths
          <Redirect from="/register" to="/" />
          <Route exact path='/user/:id/tasks' component={My_Tasks} />
          <Route path='/tasks' render={(props) => <Task_Index userID={this.state.userID} />} />
          <Route path='/' component={Dashboard} />
        </Switch>

        :<Switch> //public paths
        <Route exact path='/login' render={(props) => <Sign_In refresh={this.refresh}/>} />
        <Route exact path='/register' component={Registration} />
        <Route path='/' component={Home} />
        </Switch>}
      </Router>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // let id = this.auth.getUserId()
    // if(id != null){
    //   this.setState({userID: id})
    // }
  }

  refresh = () => {
    this.setState ({
      authenticated: this.auth.loggedIn()
    })
  }
}

export default App;

// <Route exact path='/login' render={(props) => <Sign_in checkForToken={this.checkForToken}/>} />
