import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDetails from "./components/MainDashboard/CompanyDetails/CompanyDetails";
import Compose from "./components/MainDashboard/Coompose/Coompose";
import Customers from "./components/MainDashboard/Customers/Customers";
import Dashboard from "./components/MainDashboard/Dashboard";
import EmailSignature from "./components/MainDashboard/EmailSignature/EmailSignature";
import Group from "./components/MainDashboard/Group/Group";
import InboxDetails from "./components/MainDashboard/Inbox/InboxDetails";
import Invoice from "./components/MainDashboard/Invoice/Invoice";
import Payment from "./components/MainDashboard/Payment/Payment";
import Profile from "./components/MainDashboard/Profile/Profile";
import ReportPage from "./components/MainDashboard/ReportPage/ReportPage";
import SchedulePage from "./components/MainDashboard/SchedulePage/SchedulePage";
import Sent from "./components/MainDashboard/Sent/Sent";
import SentDetails from "./components/MainDashboard/Sent/SentDetails";
import SentFilter from "./components/MainDashboard/SentFilter/SentFilter";
import Tag from "./components/MainDashboard/Tag/Tag";
import Team from "./components/MainDashboard/Team/Team";
import Ticket from "./components/MainDashboard/Ticket/Ticket";
import NavDashboard from "./components/NavDashboard/NavDashboard";
import ForgetPassword from "./components/SignIn/ForgetPassword";
import SignInSide from "./components/SignIn/SignIn";
import TrialPage from "./components/TrialPage/TrialPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={SignInSide} />
          <Route path='/inbox' component={Dashboard} />
          <Route path='/customers' component={Customers} />
          <Route path='/details/:inboxId' component={InboxDetails} />
          <Route path='/sent' component={Sent} />
          <Route path='/sentDetails/:sentId' component={SentDetails} />
          <Route path='/profile' component={Profile} />
          {/* <Route path='/privacy' component={Privacy} /> */}
          <Route path='/team' component={Team} />
          <Route path='/companydetails' component={CompanyDetails} />
          <Route path='/compose' component={Compose} />
          <Route path='/ticket' component={Ticket} />
          <Route path='/calender' component={SchedulePage} />
          <Route path='/email-signature' component={EmailSignature} />
          <Route path='/trial' component={TrialPage} />
          <Route path='/payment' component={Payment} />
          <Route path='/invoice' component={Invoice} />
          <Route path='/report' component={ReportPage} />
          <Route path='/tag' component={Tag} />
          <Route path='/group' component={Group} />
          <Route path='/filter' component={SentFilter} />
          <Route path='/dashboard' component={NavDashboard} />
          <Route patho='/passwordReset' component={ForgetPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
