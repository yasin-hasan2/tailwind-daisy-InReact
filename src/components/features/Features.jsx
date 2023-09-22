// import React from 'react';
import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ feature }) => {
  console.log(feature);
  return (
    <p className="flex items-center gap-2">
      {" "}
      <AiFillCheckCircle className="text-green-400"></AiFillCheckCircle>{" "}
      {feature}
    </p>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
