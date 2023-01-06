import React, { useState } from "react";

import Card from "../UI/Card";
import RidesFilter from "./RidesFilter";
import RidesList from "./RidesList";
import RidesChart from "./RidesChart";
import "./Rides.css";

//function Rides(props) {
const Rides = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredRides = props.items.filter((ride) => {
    return ride.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="rides">
        <RidesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <RidesChart rides={filteredRides}/>
        <RidesList items={filteredRides}/>

      </Card>
    </div>
  );
};

export default Rides;
