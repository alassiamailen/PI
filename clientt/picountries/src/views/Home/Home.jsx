import React from "react";
import style from "./home.module.css";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../components/Redux/Actions/actionsGetCountries";
import { paginate } from "../../components/Redux/Actions/actionsPaginate";
import { order } from "../../components/Redux/Actions/actionsOrder";
const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  useEffect(() => {
    dispatch(getCountries());
  },[]);

  const page=(event)=>{
    dispatch(paginate(event.target.name))
  }
  const orderByName=(event)=>{
    dispatch(order(event.target.name))
  }

  return (
    <div className={style.homeCont}>
      {console.log("--->", allCountries)}
      <h1 className={style.subtitle}>PAISES</h1>
      <input type="search" name="Buscar" placeholder="Buscar" />
      <div>
        <button name="prev" onClick={page}>PREV</button>
        <button name="next" onClick={page}>NEXT</button>
      </div>
      <div>
        <label>FILTER</label>
        <button name="az" onClick={orderByName}>A-Z</button>
        <button name="za" onClick={orderByName}>Z-A</button>
      </div>
      <div>
        <Cards allCountry={allCountries}/>
      </div>
    </div>
  );
};

export default Home;
