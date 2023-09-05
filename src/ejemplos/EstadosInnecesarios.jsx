import React, { useState } from "react";

const EstadosInnecesarios = ({ users }) => {
  const [index, setIndex] = useState(0);

  const handleNextUser = () => {
    setIndex(index + 1 > users.length - 1 ? index : index + 1);
  };

  const handlePrevUser = () => {
    setIndex(index - 1 < 0 ? index : index - 1);
  };

  return (
    <div>
      <button onClick={handlePrevUser}>{"<-"}</button>
      <p>{users[index].name}</p>
      <p>{users[index].age}</p>
      <button onClick={handleNextUser}>{"->"}</button>
    </div>
  );
};

export default EstadosInnecesarios;
