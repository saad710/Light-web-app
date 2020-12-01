import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from '../apiKey';
const { createContext } = require("react");

export const ComposeContext = createContext({ compose: 'loading' })

const ComposeProvider = (props) => {
    const [compose, setCompose] = useState('loading')
    const { children } = props
    useEffect(() => {
        Axios.get(`${key}clients`)
            .then(res => {
                setCompose(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    }, [])

    return (
        <ComposeContext.Provider value={{ compose, setCompose }}>
            { children }
        </ComposeContext.Provider>
    );
};

export default ComposeProvider;