// This mix of JS and HTML code is a React pattern (for jsx code).
import React, { useState, useEffect } from "react";

// Gonna want useEffect too... Triggering getting and setting data.

// These are UI components, all placed in a single "card."
import Header from "./components/UI/Header";
import Rides from "./components/Rides/Rides";
import NewRide from "./components/NewRide/NewRide";
import Footer from "./components/UI/Footer";

// Get 'starter/demo' data
// This serves as 'default' data and should set to an empty array/removed.
import { data } from "./data/data.js";

//TODO: convert to load from persisted Redux state.

// function App() {     // Alternate syntax:
const App = () => {
  const [rides, setRides] = useState(data);

  for (var i = 0; i < rides.length; i++) {
    rides[i].date = new Date(rides[i].date);
    rides[i].distance = parseFloat(rides[i].distance);
  }

  /* 
  
  Restore this when ready to pull from LocalStorage.

  */
  useEffect(() => {
    // const data = JSON.parse(window.localStorage.getItem("RIDES_APP_DATA"));
    //const data = JSON.parse(rides);

    console.log("Loaded data");
    //console.log("In App.js", data);

    /* rides.forEach((datum) => {
      console.log(rides);
    }); */

    if (rides !== null) setRides(rides);
  }, []);

  useEffect(() => {
    // console.log("rides", rides);
    window.localStorage.setItem("RIDES_APP_DATA", JSON.stringify(rides));
    console.log("Saved data to localStorage");
  }, [rides]);

  console.log("Loading app, a fine time to load in rides data.");

  const addRideHandler = (ride) => {
    setRides((prevRides) => {
      // 'Function form'
      return [...prevRides, ride]; // Returns an  array of rides. TODO: control adding at head or tail.
    });
  };

  // Add a 'delete ride' feature?
  /* const deleteRideHandler = (ride) => {
  };
  */

  // This code is JSX syntax that generates more verbose React.createElement code.
  return (
    <div>
      <Header />
      <Rides items={rides} />
      <NewRide onAddRide={addRideHandler} />
      <Footer />
    </div>
  );
};

export default App;

/* iterate array and cast 'date' to a Date object and 'distance' to a number 
for (var i = 0; i < rides.length; i++) {
  rides[i].date = new Date(rides[i].date);
  rides[i].distance = parseFloat(rides[i].distance);
}
*/
