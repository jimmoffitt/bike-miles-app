import React, { useState } from "react";

// import "./RideFormNew.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css'; //TODO: more global place for this?

const NewRideGrid = (props) => {
  // Setting up as individual state trackers.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDistance, setEnteredDistance] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredStravaDate, setEnteredStravaDate] = useState("");

  const submitRideHandler = (event) => {
    event.preventDefault();

    const rideData = {
      title: enteredTitle,
      distance: +enteredDistance, //Cast to number (from string)
      date: new Date(enteredDate),
    };

    props.onSaveRideData(rideData);
    // We want to clear these input fields:
    setEnteredTitle("");
    setEnteredDistance("");
    setEnteredDate("");
  };

  const submitStravaHandler = (event) => {
    event.preventDefault();

    const StravaRequestData = {
      since: new Date(enteredStravaDate),
    };

    props.onSaveRideData(StravaRequestData);
    // We want to clear these input fields:
    setEnteredStravaDate("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // The 'event' object is provided and the current value can be referenced.
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const distanceChangeHandler = (event) => {
    setEnteredDistance(event.target.value);
  };

  const stravaDateChangeHandler = (event) => {
    setEnteredStravaDate(event.target.value);
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            placeholder="Description"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Form.Control
            placeholder="Date"
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Distance (miles)"
            type="number"
            min="0.1"
            step="0.1"
            value={enteredDistance}
            onChange={distanceChangeHandler}
          />
        </Col>
        <Col>
          <Button type="submit" onClick={submitRideHandler} size="sm" >Add ride</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="submit" onClick={submitStravaHandler} size="sm" >Import Strava rides since: </Button>
        </Col>
        <Col>
          <Form.Control placeholder="Date" type="date" value={enteredStravaDate}
            onChange={stravaDateChangeHandler}/>
        </Col>
      </Row>
    </Form>
  );
};

export default NewRideGrid;
