import React from 'react';

import RideItem from './RideItem';
import './RidesList.css';

const RidesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='rides-list__fallback'>Found no rides.</h2>
    }

    return <ul className='rides-list'>
        {props.items.map((ride) => (
            <RideItem
                key={ride.id} // Always use a key when you are mapping arrays.
                title={ride.title}
                distance={ride.distance}
                date={ride.date}
            />
        ))}    
    </ul>
};

export default RidesList;