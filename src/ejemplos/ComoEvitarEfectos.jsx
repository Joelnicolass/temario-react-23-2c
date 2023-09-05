import React, { useEffect, useState } from "react";

const textos = [
  {
    id: 1,
    texto:
      "texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1texto 1",
  },
  {
    id: 2,
    texto:
      "texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2texto 2",
  },
  {
    id: 3,
    texto:
      "texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3texto 3",
  },
  {
    id: 4,
    texto:
      "texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4texto 4",
  },
];

const ComoEvitarEfectos = () => {
  const [text, setText] = useState(textos[0]);

  const [showMarquee, setShowMarquee] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMarquee(false);
      const index = textos.findIndex((t) => t.id === text.id);
      const nextIndex = index + 1 === textos.length ? 0 : index + 1;
      setText(textos[nextIndex]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [text.id]);

  useEffect(() => {
    setShowMarquee(true);
  }, [text]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>{showMarquee && <marquee>{text.texto}</marquee>}</div>

      {/* <div>
        <marquee>{text.texto}</marquee>
      </div> */}
    </div>
  );
};

export default ComoEvitarEfectos;
