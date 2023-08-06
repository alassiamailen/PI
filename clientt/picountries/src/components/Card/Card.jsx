import React from "react";
import style from "./card.module.css";

const Card = ({ name, continente, img }) => {
  return (
    <div className={style.cardCont}>
      <div className={style.name}>
        <h4>{name}</h4>
      </div>
      <div className={style.lab}>
        <label>{continente}</label>
        <img src={img} alt="imagen bandera"/>
      </div>
    </div>
  );
};

export default Card;
