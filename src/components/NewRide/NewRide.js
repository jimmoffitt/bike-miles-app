import React from 'react';

import NewRideGrid from './RideForm';
import './NewRide.css';

const NewRide = (props) => {

    const saveRideDataHandler = (enteredRideData) => {
        const rideData = {
            ...enteredRideData,
            id: Math.random().toString()
        };
        props.onAddRide(rideData);
    };

    // Common React pattern. Allows us to exectute the handler in ExpenseForm. Enables child ExpenseForm to commmunicate up to this NewExpense component.     
    return <div className='new-ride'>
        <NewRideGrid onSaveRideData={saveRideDataHandler} />
    </div>

};

export default NewRide;