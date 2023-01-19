import React, { useState } from "react";

import "./RideForm.css";

const RideForm = (props) => {
  // Setting up as individual state trackers.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDistance, setEnteredDistance] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Here we set up a unified State object.
  // const [userInput, setUserInput ] = useState( {
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // } );

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // The 'event' object is provided and the current value can be referenced.
  };

  // Here is the safer pattern for not mucking up event timing with unified States.
  //    setUserInput( (prevState) => {
  //        return { ...prevState, enteredTitle: event.target.value};
  //    });
  //};

  const distanceChangeHandler = (event) => {
    setEnteredDistance(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const rideData = {
      title: enteredTitle,
      distance: +enteredDistance, //Cast to number (from string)
      date: new Date(enteredDate),
    };

    props.onSaveRideData(rideData);
    setEnteredTitle("");
    setEnteredDistance("");
    setEnteredDate("");
  };

  // Below with value= we have two-way binding, which is fundamental with forms.
  // TODO: Add styling to top <h3> element. Left justify at least.
  return (
    <form onSubmit={submitHandler}>
      <div className="new-ride__preamble">
        <h3>Enter new ride data</h3>
      </div>
      <div className="new-ride__controls">
        <div className="new-ride__description">
          <label>Short description</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-ride__date">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-ride__distance">
          <label>Distance</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredDistance}
            onChange={distanceChangeHandler}
          />
        </div>
        <div className="new-ride__actions">
          <button type="submit">Add Ride</button>
        </div>
      </div>
      <div className="new-ride__description">
        <label>Import rides from Strava (soon?)</label>
      </div>
    </form>
  );
};

export default RideForm;
