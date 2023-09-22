// import React from 'react';
import { LineChart as LChart, XAxis, YAxis, Line } from "recharts";

const LineChart = () => {
  const students = [
    { id: 1, name: "Student 1", math_mark: 85 },
    { id: 2, name: "Student 2", math_mark: 92 },
    { id: 3, name: "Student 3", math_mark: 78 },
    { id: 4, name: "Student 4", math_mark: 88 },
    { id: 5, name: "Student 5", math_mark: 95 },
    { id: 6, name: "Student 6", math_mark: 75 },
    { id: 7, name: "Student 7", math_mark: 90 },
    { id: 8, name: "Student 8", math_mark: 87 },
    { id: 9, name: "Student 9", math_mark: 79 },
    { id: 10, name: "Student 10", math_mark: 93 },
  ];
  return (
    <div>
      <LChart width={500} height={400} data={students}>
        <XAxis></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math_mark"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
