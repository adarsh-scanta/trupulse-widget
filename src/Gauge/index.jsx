import React from "react";
import "./index.css";
import ReactECharts from "echarts-for-react";

const Gauge = (props) => {

  const option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        lineStyle: {
          width: 6,
          color: "#0f0",
        },
        startAngle: 240,
        endAngle: 300,
        name: "Morale",
        type: "gauge",
        progress: {
          show: true,
          roundCap: true,
          width: 15,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            color:   [[1, "#e6ebf8"]],
            width: 15,
          },
        },
        splitLine: {
          length: 8,
          lineStyle: {
            width: 1,
            color:  "#666",
          },
        },
        axisLabel: {
          distance: 25,
          color: "#666",
        },
        splitNumber: 5,

        axisTick: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}%",
          offsetCenter: [0, "90%"],
          fontSize: 23,
          borderRadius: 8,
          color: "#666",
        },
        itemStyle: {
          color: "#43b5f4",
          // shadowColor: "rgba(0,138,255,0.45)",
          // shadowBlur: 10,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
        },
        data: [
          {
            value: props.value,
          },
        ],
      },
    ],
  };

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
};

Gauge.defaultProps = {
  value: "",
  low: "",
  high: "",
};
export default Gauge;
