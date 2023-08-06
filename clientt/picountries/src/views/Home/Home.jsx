import React from "react";
import style from "./home.module.css";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../components/Redux/Actions/actionsGetCountries";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  useEffect(() => {
    dispatch(getCountries());
  },[]);

  return (
    <div className={style.homeCont}>
      {console.log("--->", allCountries)}
      <h1 className={style.subtitle}>PAISES</h1>
      <input type="search" name="Buscar" placeholder="Buscar" />
      <div>
        <Cards allCountry={allCountries}/>
      </div>
    </div>
  );
};

export default Home;
