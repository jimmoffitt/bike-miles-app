import React from 'react';

import Chart from '../Chart/Chart'

function DistanceByMonthChart(props) {

    const chartDataPoints = [
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Apr', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'Jul', value: 0},
        { label: 'Aug', value: 0},
        { label: 'Sep', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Nov', value: 0},
        { label: 'Dec', value: 0},
    ];

    // 'of' loops for arrays.
    // 'in' loops for ?

    for (const ride of props.rides) {
        const dt = new Date(ride.date)
        const rideMonth = dt.getMonth(); //0-11, January = 0
        chartDataPoints[rideMonth].value += ride.distance; 

    }

    return <Chart dataPoints={chartDataPoints} />

};

export default DistanceByMonthChart;