import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Week 1', Total: 4000, Sent: 2400, amt: 2400,
    },
    {
        name: 'Week 2', Total: 3000, Sent: 1398, amt: 2210,
    },
    {
        name: 'Week 3', Total: 2000, Sent: 9800, amt: 2290,
    },
    {
        name: 'Week 4', Total: 2780, Sent: 3908, amt: 2000,
    },
    {
        name: 'Week 5', Total: 1890, Sent: 4800, amt: 2181,
    },
    {
        name: 'Week 6', Total: 2390, Sent: 3800, amt: 2500,
    },
    {
        name: 'Week 7', Total: 3490, Sent: 4300, amt: 2100,
    },
];

const Chart = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div>
                    <Typography className="py-4"> Monthly Overview </Typography>
                        <Paper>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Total" fill="#8884d8" />
                                <Bar dataKey="Sent" fill="#82ca9d" />
                            </BarChart>
                        </Paper>
                    </div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper>
                        
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Chart;