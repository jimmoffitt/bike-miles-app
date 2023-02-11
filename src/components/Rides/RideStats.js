import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css"; //TODO: more global place for this?

import "./RideStats.css";

function RideStats(props) {
  //TODO: either pass in year and list rides, and total up miles.
  console.log("In RideStats.js");
  //console.log(props);

  let monthTotals = 0;
  let yearTotals = 0;

  for (const ride of props.filteredYearRides) {
    console.log(ride.date)
    if(ride.date.toLocaleString('default', { month: 'long' }) === props.filteredMonth) {
      monthTotals += ride.distance;
    }
    //if ride date matches current selected month. 
    //.toLocaleString('default', { month: 'long' });
    //monthTotals += ride.distance;
  }

  for (const ride of props.filteredYearRides) {
    yearTotals += ride.distance;
  }

  return (
    <Row>
      <Col>
        <div className="ride-stats__label">
          <div>Monthly miles</div>
          <div>{parseFloat(monthTotals).toFixed(1)}</div>
        </div>
      </Col>
      <Col>
        <div className="ride-stats__label">
          <div>Annual miles</div>
          <div>{Math.round(yearTotals)}</div>
        </div>
      </Col>
    </Row>
  );
}

export default RideStats;
