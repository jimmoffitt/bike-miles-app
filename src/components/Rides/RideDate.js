import React from 'react';

import './RideDate.css';

//function RideDate(props) {
const RideDate = (props) => {
  
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className='ride-date'>
        <div className='ride-date__month'>{month}</div>
        <div className='ride-date__year'>{year}</div>
        <div className='ride-date__day'>{day}</div>
      </div>  

    );
}

export default RideDate;
