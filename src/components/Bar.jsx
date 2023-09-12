import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bar = ({ name, sourceUrl, imgUrl }) => {
  return (
    <Link to={sourceUrl}>
      <button className="my-3 mx-2.5 px-4 py-2 w-36 rounded-md active:bg-white flex focus:shadow-sm items-center">
        <img
          src={imgUrl}
          className="h-6 w-6 mr-2 focus:bg-black"
          alt="Home Icon"
        />
        <p className="text-left mr-8 font-normal text-xs">{name}</p>
      </button>
    </Link>
  );
};

export default Bar;
