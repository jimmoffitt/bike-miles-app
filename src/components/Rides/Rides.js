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
  const [filteredMonth, setFilteredMonth] = useState("January")

  const yearFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const monthFilterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  // TODO: Add month filter.
  const filteredRides = props.items.filter((ride) => {
    return ride.date.getFullYear().toString() === filteredYear;
    //retrun ride.date. getFullMonth().toString === filteredYear, filteredMonth;
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
        <RidesList items={filteredRides}/>

      </Card>
    </div>
  );
};

export default Rides;
