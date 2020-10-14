import React, { createContext } from 'react'
import Dashboard from './components/MainDashboard/Dashboard'
import SignInSide from './components/SignIn/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InboxDetails from './components/MainDashboard/Inbox/InboxDetails'
import Sent from './components/MainDashboard/Sent/Sent'
import SentDetails from './components/MainDashboard/Sent/SentDetails'
import Customers from './components/MainDashboard/Customers/Customers'
import Compose from './components/MainDashboard/Coompose/Coompose'
import Profile from './components/MainDashboard/Profile/Profile'
import Privacy from './components/MainDashboard/Privacy/Privacy'
import Team from './components/MainDashboard/Team/Team'
import CompanyDetails from './components/MainDashboard/CompanyDetails/CompanyDetails'
import Ticket from './components/MainDashboard/Ticket/Ticket';
import EmailSignature from './components/MainDashboard/EmailSignature/EmailSignature';
import TrialPage from './components/TrialPage/TrialPage';
import Payment from './components/MainDashboard/Payment/Payment';
import Invoice from './components/MainDashboard/Invoice/Invoice';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route path="/inbox" component={Dashboard} />
          <Route path="/customers" component={Customers} />
          <Route path="/details/:inboxId" component={InboxDetails} />
          <Route path="/sent" component={Sent} />
          <Route path="/sentDetails/:sentId" component={SentDetails} />
          <Route path="/profile" component={Profile} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/team" component={Team} />
          <Route path="/companydetails" component={CompanyDetails} />
          <Route path="/compose" component={Compose} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/email-signature" component={EmailSignature} />
          <Route path="/trial" component={TrialPage} />
          <Route path="/payment" component={Payment} />
          <Route path="/invoice" component={Invoice} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
