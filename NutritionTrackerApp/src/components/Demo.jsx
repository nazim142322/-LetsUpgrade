import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div>
      This is demo page <Link to="/track">Track</Link>
      <h3>
        <Link to="/logout">logout</Link>
      </h3>
    </div>
  );
};

export default Demo;
