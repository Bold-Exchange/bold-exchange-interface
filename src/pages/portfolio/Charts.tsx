import React from "react";
import ReactDOM from "react-dom";
import { Chart, Line, Point, Tooltip, getTheme, Axis } from "bizcharts";

console.log(getTheme());

// 数据源
const data = [
  {
    year: "1991",
    value: 3,
  },
  {
    year: "1992",
    value: 4,
  },
  {
    year: "1993",
    value: 3.5,
  },
  {
    year: "1994",
    value: 5,
  },
  {
    year: "1995",
    value: 4.9,
  },
  {
    year: "1996",
    value: 6,
  },
  {
    year: "1997",
    value: 7,
  },
  {
    year: "1998",
    value: 9,
  },
  {
    year: "1999",
    value: 13,
  },
  {
    year: "2000",
    value: 3,
  },
  {
    year: "2001",
    value: 4,
  },
  {
    year: "2002",
    value: 3.5,
  },
  {
    year: "2003",
    value: 5,
  },
  {
    year: "2004",
    value: 4.9,
  },
  {
    year: "2005",
    value: 6,
  },
  {
    year: "2006",
    value: 7,
  },
  {
    year: "2007",
    value: 9,
  },
  {
    year: "2008",
    value: 13,
  },
  {
    year: "2009",
    value: 3,
  },
  {
    year: "2010",
    value: 4,
  },
];

export default function Demo() {
  return (
    <>
      <Chart
        appendPadding={[10, 0, 0, 10]}
        autoFit
        height={500}
        data={data}
        onLineClick={console.log}
        scale={{
          value: { min: 0, alias: "人均年收入", type: "linear-strict" },
          year: { range: [0, 1] },
        }}
      >
        <Axis name="value" visible={false} />
        <Line color={"green"} position="year*value" />
        <Point color={"green"} shape="circle" position="year*value" />
        <Tooltip showCrosshairs />
      </Chart>
    </>
  );
}
