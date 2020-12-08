import { Container, makeStyles } from "@material-ui/core";
import moment from 'moment';
import React, { useContext } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { MailboxContext } from "../../../Providers/MailboxProvider";
import AppBarDrawer from "../AppBarDrawer";

const localizer = momentLocalizer(moment)

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  table: {
    minWidth: 650,
  },
  btnStyle: {
    backgroundColor: "#fff",
    color: "#2d2d2d",
    borderRadius: 0,
    padding: "0.5rem 5rem",
  },
  // fixedHeight: {
  //     height: 240,
  // },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#3A86BC",
  },
  customerPaper: {
    width: "50%",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#3A86BC",
  },
  cardRoot: {
    minWidth: 275,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#3A86BC",
    boxShadow: "none",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "start",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#213F7E",
    borderRadius: "0",
    padding: "0.6rem 0",
  },
  paginationBox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
  },
  pagination: {
    border: "1px solid #ddd",
    backgroundColor: "#eee",
  },
}));

const events = [
  {
    title: "Event1",
    backgroundColor: "#213f7e",
    start: "2020-11-12T10:30:00",
    display: "block",
    end: "2020-11-12T11:30:00",
  },
  {
    display: "block",
    title: "Event2",
    backgroundColor: "#4195d1",
    start: "2020-12-12T11:30:00",
    end: "2020-12-12T12:30:00",
  },
  {
    title: "Event3",
    display: "block",
    backgroundColor: "#213f7e",
    start: "2020-10-15T10:30:00",
    end: "2020-10-15T11:30:00",
  },
  {
    title: "Event4",
    display: "block",
    backgroundColor: "#378006",
    start: "2020-10-16T10:30:00",
    end: "2020-10-16T11:30:00",
  },
  {
    title: "Event5",
    backgroundColor: "#213f7e",
    start: "2020-10-20T10:30:00",
    display: "block",
    end: "2020-10-20T11:30:00",
  },
  {
    title: "Event6",
    start: "2020-10-24T10:30:00",
    end: "2020-10-24T11:30:00",
    backgroundColor: "#378006",
    color: "#213f7e",
    display: "block",
  },
  {
    title: "Event7",
    start: "Thu Nov 19 2020",
    end: "Sat Nov 21 2020",
    backgroundColor: "#378006",
    color: "#213f7e",
    display: "block",
  },
  {
    title: "Event7",
    start: "Thu Nov 26 2020",
    end: "Sat Nov 28 2020",
    backgroundColor: "#378006",
    color: "#213f7e",
    display: "block",
  },
];

const SchedulePage = () => {
  const { groupsMail, allMail } = useContext(MailboxContext)
  console.log("allMail",allMail);
  
  console.log("groupsMail", groupsMail);
   
  const classes = useStyles();
  console.log(events);
  return (
    <div className={classes.root}>
      <AppBarDrawer />
      <Container className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Container>
    </div>
  );
};

export default SchedulePage;
