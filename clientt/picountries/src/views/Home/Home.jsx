import React from "react";
import style from "./home.module.css";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../components/Redux/Actions/actionsGetCountries";
import { paginate } from "../../components/Redux/Actions/actionsPaginate";
import { order } from "../../components/Redux/Actions/actionsOrder";
import { population } from "../../components/Redux/Actions/actionsPopulation";
import { byContinent } from "../../components/Redux/Actions/actionsByContinent";

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
  const orderByPopulation=(event)=>{
    dispatch(population(event.target.name))
  }
  const filterCont=(event)=>{
    dispatch(byContinent(event.target.value))
  }

  return (
    <div className={style.homeCont}>
     
      <h1 className={style.subtitle}>PAISES</h1>
      <input type="search" name="Buscar" placeholder="Buscar" />
      <div>
        <button name="prev" onClick={page}>PREV</button>
        <button name="next" onClick={page}>NEXT</button>
      </div>
      <div>        
        <button name="az" onClick={orderByName}>A-Z</button>
        <button name="za" onClick={orderByName}>Z-A</button>
      </div>
      <div>
        <button name="mayorP" onClick={orderByPopulation}>Mayor Poblacion</button>
        <button name="menorP" onClick={orderByPopulation}>Menor Poblacion</button>
      <div>
      <div>
          
          <select onChange={filterCont} name="continent">
          <option value="">Continentes...</option>
            <option value="asia">ASIA</option>
            <option value="americaSur">AMERICA DEL SUR</option>
            <option value="americaNorte">AMERICA DEL NORTE</option>
            <option value="africa">AFRICA</option>
            <option value="antartida">ANTARTIDA</option>
            <option value="europa">EUROPA</option>
            <option value="oceania">OCEANIA</option>

          </select>
      </div>
        

        </div>
        <Cards allCountry={allCountries}/>
      </div>
    </div>
  );
};

export default Home;
