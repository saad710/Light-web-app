import Axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { key } from '../apiKey';
import { LoggedInContext } from './LoggedInProvider';
const { createContext } = require("react");


export const ScheduleContext = createContext({ schedule: 'loading' })

const ScheduleProvider = (props) => {
    const { loggedInUser } = useContext(LoggedInContext)
    const id = loggedInUser !== null && loggedInUser.id
    const [schedule, setSchedule] = useState([])
    // console.log("schedule Provider", schedule);
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString())
    const d = moment(currentDate).format('MMMM Do YYYY, h:mm:ss a')
    // console.log("current date", d);
    // const scheduleMap = schedule.map(sh => console.log(sh))

    // console.log("ss", scheduleMap);

    const { children } = props
    useEffect(() => {
        Axios.get(`${key}all-schedule-mail`)
            .then(res => {
                setSchedule(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, [id])

    return (
        <ScheduleContext.Provider value={{ schedule, setSchedule  }}>
            { children}
        </ScheduleContext.Provider>
    );
};

export default ScheduleProvider;