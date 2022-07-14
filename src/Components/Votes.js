import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Votes = ({score}) => {
  const [count, setCount] = useState(score);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="vote">
      {" "}
      <FaPlus onClick={increaseCount} className="plus"/>
      <p className="numbers">{count}</p> 
      <FaMinus onClick={decreaseCount} className="minus"/>
    </div>
  );
};

export default Votes;
