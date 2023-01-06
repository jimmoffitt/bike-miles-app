// This mix of JS and HTML code is a React pattern (for jsx code).
import React, { useState } from "react";

import NewRide from "./components/NewRide/NewRide";
import Rides from "./components/Rides/Rides";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

const DUMMY_DATA = [
  {
    id: "e0",
    title: "A snowy and cold mess...",
    distance: 7.8,
    date: new Date(2023, 0, 6),
  },
  {
    id: "e1",
    title: "It's finally above 50F...",
    distance: 15.1,
    date: new Date(2023, 0, 8),
  },
  {
    id: "e5",
    title: "Denver tour",
    distance: 22,
    date: new Date(2023, 0, 12),
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
 
];

// Alternate syntax:
// function App() {
const App = () => {
  const [rides, setRides] = useState(DUMMY_DATA);

  const addRideHandler = (ride) => {
    setRides((prevRides) => {
      // 'Function form'
      return [ride, ...prevRides];
    });
  };

  // This code is JSX syntax that generates more verbose React.createElement code.
  return (
    <div>
      <Header />
      <NewRide onAddRide={addRideHandler} />
      <Rides items={rides} />
      <Footer />
    </div>
  );
};

export default App;
