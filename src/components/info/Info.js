import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <h1>¡En busqueda de oportunidades de desarrollo web!</h1>
        <h2>
          Si conoce algún puesto disponible o si tiene alguna pregunta, no dude
          en enviarme un correo electrónico a
          <span className="info_a">  marcelofernandez.dev@gmail.com</span>
        </h2>
      </div>
    </div>
  );
};

export default Info;
