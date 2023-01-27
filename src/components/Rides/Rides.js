import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css"; //TODO: more global place for this?
import Card from "../UI/Card";
import RidesYearFilter from "./RidesYearFilter";
import RidesMonthFilter from "./RidesMonthFilter";
import RidesList from "./RidesList";
import DistanceByMonthChart from "./DistanceByMonthChart";
import "./Rides.css";

//function Rides(props) {
const Rides = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredMonth, setFilteredMonth] = useState("January");
  //const [rides, setRides] = useState([]);

  const yearFilterChangeHandler = (selectedYear) => {
    // console.log('Updated year');
    setFilteredYear(selectedYear);
  };

  const monthFilterChangeHandler = (selectedMonth) => {
    // console.log('Updated month');
    setFilteredMonth(selectedMonth);
  };

  // Here, 'rides' is the archive of rides, not just what is listed.
  /* const ridesChangeHandler = (rides) => {
    setRides(rides);
  }; */

  // TODO: Add month filter.
  // return ride.date.getFullYear().toString() === filteredYear && ride.date.getMonth().toString === filteredMonth;

  const filteredRides = props.items.filter((ride) => {
    const dt = new Date(ride.date);
    // console.log(filteredYear, dt.getFullYear().toString());
    // console.log(filteredMonth, dt.toLocaleString('default', { month: 'long' }));
    return (dt.getFullYear().toString() === filteredYear) && ( dt.toLocaleString('default', { month: 'long' }) === filteredMonth);
  });

  return (
    <div>
      <Card className="rides">
        <DistanceByMonthChart rides={props.items} />
        <Row>
          <Col>
          <RidesMonthFilter
            selected={filteredMonth}
            onChangeMonthFilter={monthFilterChangeHandler}
          />
          </Col>
          <Col>
          <RidesYearFilter
            selected={filteredYear}
            onChangeYearFilter={yearFilterChangeHandler}
          />
          </Col>
        </Row>
        <RidesList rides={filteredRides} />
      </Card>
    </div>
  );
};

export default Rides;
