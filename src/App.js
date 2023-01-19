// This mix of JS and HTML code is a React pattern (for jsx code).
import React, { useState, useEffect } from "react";

// Gonna want useEffect too... Triggering getting and setting data.

// These are UI components, all placed in a single "card."
import NewRide from "./components/NewRide/NewRide";
import Rides from "./components/Rides/Rides";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

//TODO: convert to load from persisted Redux state.
// This serves as 'default' data and should set to an empty array/removed.
const STARTER_RIDES_DATA = [];
 /*  {
    id: "e0",
    title:
      "A snowy and cold mess... Exploring this week's options after lots of snow.",
    distance: 15.1,
    date: new Date(2023, 0, 6),
  },
  {
    id: "z0",
    title: "More yellow-lined pavement...",
    distance: 7.8,
    date: new Date(2023, 0, 7),
  },
  {
    id: "e1",
    title: "It's finally above 50F...",
    distance: 10.3,
    date: new Date(2023, 0, 12),
  },
  {
    id: "e5",
    title: "SKOL wander",
    distance: 6.26,
    date: new Date(2023, 0, 15),
  },
  {
    id: "e76",
    title: "Just a fun deadline wander",
    distance: 7.8,
    date: new Date(2023, 0, 16),
  },
  {
    id: "e2",
    title: "Northern wander",
    distance: 15.17,
    date: new Date(2022, 11, 18),
  },
  {
    id: "e3",
    title: "McIntosh Lake wander",
    distance: 4.82,
    date: new Date(2022, 11, 17),
  },
  {
    id: "e4",
    title: "Townie wander",
    distance: 12.42,
    date: new Date(2022, 11, 14),
  },
  {
    id: "644",
    title: "Northern wander",
    distance: 15.42,
    date: new Date(2022, 10, 14),
  },
]; */

// Alternate syntax:
// function App() {
const App = () => {
  const [rides, setRides] = useState(STARTER_RIDES_DATA);

  useEffect(() => {
    const data = window.localStorage.getItem('RIDES_APP_DATA');
    console.log("Retrieved data from localStorage?");
    if ( data !== null ) setRides(JSON.parse(data));
  }, []);

  useEffect(() => {
    console.log("rides", rides);
    window.localStorage.setItem('RIDES_APP_DATA', JSON.stringify(rides));
    console.log("Saved data to localStorage?");
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
