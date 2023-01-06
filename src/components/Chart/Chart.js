import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

// Here the one chart is made up of many data bars.
const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);   
    const globalMaxValue = Math.max(...dataPointValues);

    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxValue={globalMaxValue} 
            label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
