// import React from 'react';

// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

import { Audio } from "react-loader-spinner";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  //   Legend,
  //   ResponsiveContainer,
} from "recharts";

// ===================================================================
const BrokenPhone = () => {
  const [phone, setPhone] = useState([]);
  const [loding, setLoding] = useState([]);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhone(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const object = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return object;
        });
        console.log(phoneWithFakeData);
        setPhone(phoneWithFakeData);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl">this is phone info </h1>

      <div>
        {loding && (
          <div>
            <Audio
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        )}
      </div>

      <h2 className="text-2xl">Phone Data {phone.length} </h2>
      <BarChart width={600} height={400} data={phone}>
        <Bar dataKey="price" fill="#38BDF8" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Cell></Cell>
      </BarChart>
    </div>
  );
};

export default BrokenPhone;
