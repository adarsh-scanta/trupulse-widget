import React, { useState, useEffect } from "react";
import "./index.css";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SentimentTrend({ data }) {


const [totalData, setTotalData] = useState([]);
const [positiveData, setPositiveData] = useState([]);
const [negativeData, setNegativeData] = useState([]);

  useEffect(() => {
      var totalData;
      var positiveData;
      var negativeData;
    totalData = data.conversation_trend
      ?.sort((a, b) => (a._id > b._id ? 1 : -1))
      .map((item, idx) => {
        return {
          y: item.count,
          x: new Date(item._id),
          color: "#43B5F4",
        };
      });

    positiveData = data.sentiment_positive
      ?.sort((a, b) => (a._id > b._id ? 1 : -1))
      .map((item, idx) => {
        return {
          y:  item.count,
          x: new Date(item._id),
          color: "#91cd76",
        };
      });

    negativeData = data.sentiment_negative
      ?.sort((a, b) => (a._id > b._id ? 1 : -1))
      .map((item, idx) => {
        return {
          y: item.count,
          x: new Date(item._id),
          color: "#ef6667",
        };
      });

    setTotalData(totalData);
    setPositiveData(positiveData);
    setNegativeData(negativeData);
  }, [data]);

  const options = {
    theme: "light2",
    animationEnabled: true,
    animationDuration: 2000,

    title: {
      // text: "Salary Progression of a person"
    },
    backgroundColor: "#f6f7fc",
    dataPointMaxWidth: 40,

    zoomEnabled: true,
    axisY: {
      title: "Sentiment Count",
      labelFontSize: 13,
      titleFontSize: 14,
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
    legend: {
      fontSize: 14,
      fontColor: "#666",
    },
    data: [
      {
        type: "spline",
        lineColor: "#43B5F4",
        lineThickness: 3,
        showInLegend: true,
        legendMarkerColor: "#43b5f4",
        legendText: "Total",
        markerBorderThickness: 3,
        yValueFormatString: "#,##",
        dataPoints: totalData,
      },
      {
        type: "column",
        showInLegend: true,
        legendText: "Positive",
        legendMarkerColor: "#91cd76",
        dataPoints: positiveData,
      },
      {
        type: "column",
        showInLegend: true,
        legendText: "Negative",
        legendMarkerColor: "#ef6667",
        dataPoints: negativeData,
      },
    ],
  };

  return (
    <>
      <CanvasJSChart options={options} id="sentiment-trend-container" />
    </>
  );
}

export default SentimentTrend;
