import React from "react";
import TodoView from "./TODO/components/TodoView/TodoView";
import Lista from "./temario/renderProps/Lista";
import Item from "./temario/renderProps/Item";

const nombres = [
  {
    id: 1,
    text: "Juan",
  },
  {
    id: 2,
    text: "Pedro",
  },
  {
    id: 3,
    text: "Maria",
  },
];

const App = () => {
  return (
    <>
      {/*  <Lista
        items={nombres}
        renderItem={(item) => {
          return <Item key={item.id} nombre={item.text} />;
        }}
      /> */}

      <TodoView />
    </>
  );
};

export default App;
