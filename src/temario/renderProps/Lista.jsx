import React from "react";
import Item from "./Item";

const Lista = ({ items, renderItem }) => {
  return (
    <div>
      {items.map((item) => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Lista;
