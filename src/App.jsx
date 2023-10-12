import React from "react";
import VariasPromesas from "./temario/VariasPromesas";

const App = () => {
  return (
    <>
      <VariasPromesas />
    </>
  );
};

export default App;
/* 
const billetes = [500, 200, 100, 50, 20, 10, 5, 2, 10];

let ahorros = {};

for (let index = 0; index < billetes.length; index++) {
  ahorros = {
    ...ahorros,
    [`billete ${index + 1}`]: billetes[index],
  };
}

const ahorrosConReduce = billetes.reduce(
  (ahorros, billete, index) => ({
    ...ahorros,
    [`billete ${index + 1}`]: billetes[index],
  }),
  {}
);

console.log(ahorros);
console.log(ahorrosConReduce);
 */
