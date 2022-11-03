import React, { useState, useEffect } from "react";
import "./index.css";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MoraleTrend = ({ data }) => {
const [avgTrend, setAvgTrend] = useState([]);

  useEffect(() => {
    var tempAvgData = [];
      tempAvgData =  data
        ?.sort((a, b) => (a._id > b._id ? 1 : -1))
        .map((item) => {
          return {
            y:  item.morale_avg,
            x: new Date(item._id),
            color: "#43B5F4",
            markerBorderColor: "#43B5F4",
          };
        });
    
    setAvgTrend(tempAvgData);
  }, [data]);

   const options = {
     theme: "light2",
     animationEnabled: true,
     animationDuration: 2000,

     backgroundColor: "#f6f7fc",
     zoomEnabled: true,
     axisY: {
       title: "Average Morale Score (%)",
       labelFontSize: 13,
       titleFontSize: 14,
       gridThickness: 0,
       labelFontColor: "#666",
       titleFontColor: "#666",
     },
     axisX: {
       title: "Time",
       labelFontSize: 13,
       titleFontSize: 14,
       labelFontColor: "#666",
       titleFontColor: "#666",
     },
     data: [
       {
         type: "spline",
         lineColor: "#43B5F4",
         lineThickness: 3,
         markerBorderThickness: 1,
         xValueFormatString: "DD-MMM-YY",
         yValueFormatString: "0.0#(Avg Morale Score)",
         dataPoints: avgTrend,
       },
     ],
   };


  return (
    <>
      <CanvasJSChart options={options} id="morale-trend-container" />
    </>
  );
};

export default MoraleTrend;
