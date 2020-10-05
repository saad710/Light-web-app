import React from 'react';
import Dashboard from './components/MainDashboard/Dashboard';
import SignInSide from './components/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InboxDetails from './components/MainDashboard/Inbox/InboxDetails';
import Contact from './components/MainDashboard/Contact/Contact'
import Sent from './components/MainDashboard/Sent/Sent'
import SentDetails from './components/MainDashboard/Sent/SentDetails';
import Customers from './components/MainDashboard/Customers/Customers';
import Compose from './components/MainDashboard/Coompose/Coompose'
import Profile from './components/MainDashboard/Profile/Profile';
import Privacy from './components/MainDashboard/Privacy/Privacy';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignInSide />
          </Route>
          <Route path="/inbox">
            <Dashboard />
          </Route>
          <Route path="/details/:inboxId">
            <InboxDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/sent">
            <Sent />
          </Route>
          <Route path="/sentDetails/:sentId">
            <SentDetails />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route>
            <Compose />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
