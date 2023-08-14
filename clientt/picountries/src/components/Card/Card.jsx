import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Card = ({ name, continente, img, capital,poblacion,id }) => {
  return (
    <div className={style.cardCont}>
      <div className={style.name}>
        <h4>{name}</h4>
      </div>
      <div className={style.name}>
        <label>{continente}</label>
        <Link to={`/details/${id}`}><img className={style.img} src={img} alt="imagen bandera"/></Link>
      </div>
      <div className={style.name}>
        <label>Capital: {capital} </label>
        <label>Poblacion: {poblacion}</label>
      </div>
    </div>
  );
};

export default Card;
