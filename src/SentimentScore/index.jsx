import React, { useState, useEffect } from "react";
import "./index.css";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SentimentScore({ data}) {

  const options = {
    animationEnabled: true,
    backgroundColor: "#f6f7fc",

    data: [
      {
        type: "doughnut",
        startAngle: 60,
        indexLabel: "{null}",
        yValueFormatString: "#.##'%'",
        //innerRadius: 60,
        // indexLabelFontSize: 17,
        // indexLabel: "{label} - #percent%",
        // toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          {
            y: (data.positive * 100).toFixed(2),
            label: "Positive",
            color: "#91CD76",
          },
          {
            y: (data.negative * 100).toFixed(2),
            label: "Negative",
            color: "#EF6667",
          },
        ],
      },
    ],
  };

  return (
    <>
      <CanvasJSChart options={options} id="sentiment-score-container" />
    </>
  );
}

export default SentimentScore;
