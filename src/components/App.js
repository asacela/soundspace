import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import PrivateRoute from "./authentication/PrivateRoute"
import Dashboard from "./drive/Dashboard"
import ProjectDashboard from "./drive/ProjectDashboard"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>

          {/* Drive */}

          <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
          <PrivateRoute exact path="/project" component={ProjectDashboard} />
          <PrivateRoute exact path="/project/:folderId" component={ProjectDashboard} />

          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          
        </Switch>
      </AuthProvider>
    </Router>   
  )
}

export default App;
