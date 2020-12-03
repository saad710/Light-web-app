import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../apiKey';
const { createContext } = require("react");

export const MailboxContext = createContext({ client: 'loading' })

const MailboxProvider = (props) => {
    const [singleClient, setSingleClient] = useState({})
    const [allMail, setAllMail] = useState(null)
    const [groupsMail, setGroupsMail] = useState(null)
    const { children } = props
    useEffect(() => {
        const client_id = singleClient.id
        Axios.get(`${key}client-all-mail/${client_id}`)
            .then(res => {
                console.log(res);
                const mails = res.data.all_mail
                setAllMail(mails)
            })
            .then(err => {
                console.log(err);
            })
        Axios.get(`${key}clients`)
            .then(res => {
                const data = res.data
                const client = data.filter(client => client.email === localStorage.client)
                setSingleClient(client[0])
            })
    }, [singleClient.id])
    useEffect(() => {
        Axios.get(`${key}client-all-group-mail/${singleClient.id}`)
            .then(res => {
                console.log(res.data);
                setGroupsMail(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [singleClient.id])

    return (
        <MailboxContext.Provider value={{ allMail, setAllMail, groupsMail, setGroupsMail }}>
            { children }
        </MailboxContext.Provider>
    );
};

export default MailboxProvider;