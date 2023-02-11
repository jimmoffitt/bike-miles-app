import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css"; //TODO: more global place for this?
import Card from "../UI/Card";
import RidesYearFilter from "./RidesYearFilter";
import RidesMonthFilter from "./RidesMonthFilter";
import RidesList from "./RidesList";
import DistanceByMonthChart from "./DistanceByMonthChart";
import RideStats from "./RideStats";
import "./Rides.css";

//function Rides(props) {
const Rides = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
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

  const filteredListRides = props.items.filter((ride) => {
    const dt = new Date(ride.date);
    return (
      dt.getFullYear().toString() === filteredYear &&
      dt.toLocaleString("default", { month: "long" }) === filteredMonth
    );
  });

  const filteredYearRides = props.items.filter((ride) => {
    const dt = new Date(ride.date);
    return dt.getFullYear().toString() === filteredYear;
  });

  /* const statsData  {
    rides;
    filteredMonth;
  };
 */
  return (
    <div>
      <Card className="rides">
        <DistanceByMonthChart yearRides={filteredYearRides} />
        <Row>
          <Col>
            <RidesMonthFilter
              selected={[filteredMonth]}
              onChangeMonthFilter={monthFilterChangeHandler}
            />
          </Col>
          <Col>
            <RidesYearFilter
              selected={filteredYear}
              onChangeYearFilter={yearFilterChangeHandler}
            />
          </Col>
          <Col>
            {/* <RideStats yearRides={filteredYearRides} />   */}
            <RideStats { ...{filteredYearRides, filteredMonth} } />
            {/* Need to pass in filteredMonth */}
          </Col>
        </Row>
        <RidesList rides={filteredListRides} />
      </Card>
    </div>
  );
};

export default Rides;
