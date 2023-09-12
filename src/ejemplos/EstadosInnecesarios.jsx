import React, { useState } from "react";
import User from "./User";

const EstadosInnecesarios = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextUser = () => {
    const newIndex = currentIndex + 1 > users.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const handlePrevUser = () => {
    const newIndex = currentIndex - 1 < 0 ? users.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <button onClick={handleNextUser}>{"->"}</button>

      <User name={users[currentIndex].name} age={users[currentIndex].age} />

      <button onClick={handlePrevUser}>{"<-"}</button>
    </div>
  );
};

export default EstadosInnecesarios;
