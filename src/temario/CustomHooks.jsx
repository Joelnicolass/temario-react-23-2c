import React, { useState } from "react";
import { useCounter } from "./useCounter";

const CustomHooks = () => {
  const { count, decrement, increment } = useCounter(10);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CustomHooks;
