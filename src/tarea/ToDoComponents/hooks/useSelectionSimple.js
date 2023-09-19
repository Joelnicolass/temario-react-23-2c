import React, { useState } from "react";

const useSelectionSimple = () => {
  const [selections, setSelections] = useState([]);

  const isSelected = (id) => selections.includes(id);

  const select = (id) => setSelections([...selections, id]);

  const unselect = (id) => setSelections(selections.filter((t) => t !== id));

  const selectItem = (id) => (isSelected(id) ? unselect(id) : select(id));

  const resetSelections = () => setSelections([]);

  return {
    selections,
    isSelected,
    selectItem,
    resetSelections,
  };
};

export default useSelectionSimple;
