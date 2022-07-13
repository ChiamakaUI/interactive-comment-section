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
    <div>
      {" "}
      <FaPlus onClick={increaseCount} />
      {count} <FaMinus onClick={decreaseCount} />
    </div>
  );
};

export default Votes;
