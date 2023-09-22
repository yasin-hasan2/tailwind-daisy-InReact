// import React from 'react';
import PropTypes from "prop-types";
import Features from "../features/Features";

const PriceCard = ({ priceInfo }) => {
  //   console.log(priceInfo);
  const { name, price, features } = priceInfo;
  return (
    <div className=" flex flex-col   w-96  bg-sky-600 rounded-lg text-white border mt-10 p-6">
      <div className="pb-5">
        <span className="text-5xl font-light pb-7 ">
          {" "}
          {price}
          <sub>/mon</sub>{" "}
        </span>
      </div>

      <h1 className="text-2xl font-bold pb-6"> {name} </h1>
      <hr />
      <div className="text-left text-base font-medium  flex-grow">
        {" "}
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}{" "}
        ,
      </div>

      <button className="bg-green-600 p-4 text-lg font-bold rounded-lg hover:bg-slate-400 w-full">
        Buy Now
      </button>
    </div>
  );
};

PriceCard.propTypes = {
  priceInfo: PropTypes.object,
};

export default PriceCard;
