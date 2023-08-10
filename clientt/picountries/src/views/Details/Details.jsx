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
  console.log("detail",countryDetail)

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {};
  }, [dispatch, id]);

  return (
    <div className={style.cont}>
     
      <div className={style.back}>
        <Link to="/home">
          <button>X</button>
        </Link>
      </div>

      <div>
        <div>
          <h1>{countryDetail.name}</h1>
        </div>
        <div>
          <img className={style.detail} src={countryDetail.img} alt="img" />
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
  );
};

export default Details;
