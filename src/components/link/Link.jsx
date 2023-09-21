// import React from 'react';

import PropTypes from "prop-types";

const Link = ({ route }) => {
  console.log(route);
  //   const { name, id, path } = route;
  return (
    <div>
      <li
        className="m-4 rounded-lg px-4 hover:bg-yellow-600 hover:shadow-md hover:shadow-slate-700 "
        key={route.id}
      >
        {" "}
        <a href={route.path}>{route.name}</a>{" "}
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
