import React from "react";

const Button = ({ name }) => {
  return (
    <div className="butndiv">
      <button className="px-5 m-3 bg-gray-200 rounded-md">{name}</button>
    </div>
  );
};

export default Button;
