import React, { useState } from "react";

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
    setFilteredYear(selectedYear);
  };

  const monthFilterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  // Here, 'rides' is the archive of rides, not just what is listed.
  /* const ridesChangeHandler = (rides) => {
    setRides(rides);
  }; */

  // TODO: Add month filter.
     // return ride.date.getFullYear().toString() === filteredYear && ride.date.getMonth().toString === filteredMonth;
 
  const filteredRides = props.items.filter((ride) => {
    const dt = new Date(ride.date)
    return dt.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="rides">  
        <RidesYearFilter
          selected={filteredYear}
          onChangeYearFilter={yearFilterChangeHandler}
        />
        <DistanceByMonthChart rides={filteredRides}/>
        <RidesMonthFilter
          selected={filteredMonth}
          onChangeMonthFilter={monthFilterChangeHandler}
        />
        <RidesList rides={filteredRides}/>

      </Card>
    </div>
  );
};

export default Rides;
