import React, { useEffect } from "react";
import style from "./details.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getDetails } from "../../components/Redux/Actions/actionsGetDetails";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Details = () => {
  const dispatch = useDispatch();
  const {id}  = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
 

  useEffect(() => {
    dispatch(getDetails(id));
    
  },[dispatch, id]);

  return (
    <div className={style.contenedor}>
    <div className={style.cont}>
     
      <div className={style.x} >
        <Link to="/home">
          <button className={style.back} >✖</button>
        </Link>
      </div>

      <div>
        <div className={style.name}>
          <h1 className={style.detail}>{countryDetail.name}</h1>
        </div>
        <div >
          <img className={style.img} src={countryDetail.img} alt="img" />
        </div>
        <div className={style.contDetail}>
          <p className={style.detail}>Continente: {countryDetail.continente}</p>
          <p className={style.detail}>Subregion: {countryDetail.subregion}</p>
          <p className={style.detail}>Area: {countryDetail.area}</p>
          <p className={style.detail}>Capital: {countryDetail.capital}</p>
          <p className={style.detail}>Poblacion: {countryDetail.poblacion}</p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Details;
