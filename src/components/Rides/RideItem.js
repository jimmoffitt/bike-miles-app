import React from 'react';  //Broadcasting and reacting to changes of state. 

import RideDate from './RideDate';
import Card from '../UI/Card';
import './RideItem.css'

//function RideItem(props) {  // React convention, with passing in object properties. 
const RideItem = (props) => {  
  //return <div><div>Date</div><div>Title</div></div>; //Can only have a single, top <div> (root element).
  
  return (
    <Card className='ride-item'>
      <RideDate date={props.date} />
      <div className='ride-item__description'>
        <h2>{props.title}</h2>
        <div className='ride-item__distance'>{props.distance} miles</div>
      </div>
    </Card>
  );
}

export default RideItem;
