import React, { useState, useRef } from "react";

const Ref = () => {
  const [countState, setCountState] = useState(0);

  let count = 0;
  const countRef = useRef(0);

  const handleIncrement = (e) => {
    count = count + 1;
    countRef.current = countRef.current + 1;
    console.log("let: ", count);
    console.log("ref: ", countRef.current);
    setCountState(countState + 1);
  };

  const handleDecrement = (e) => {
    count = count - 1;
    countRef.current = countRef.current + 1;
    console.log("let: ", count);
    console.log("ref: ", countRef.current);
    setCountState(countState - 1);
  };

  return (
    <div>
      <h1>Contador: {countState}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Ref;
