import React, { useState } from "react";
import style from "./home.module.css";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../components/Redux/Actions/actionsGetCountries";
import { order } from "../../components/Redux/Actions/actionsOrder";
import { population } from "../../components/Redux/Actions/actionsPopulation";
import { byContinent } from "../../components/Redux/Actions/actionsByContinent";
import { getName } from "../../components/Redux/Actions/actionsGetName";
import Paginate from "../../components/Paginate/paginate";
import  PageNumbers from "../../components/Paginate/pageNumbers";


const Home = () => {
  const [name,setName]= useState('');
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);


  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPage] = useState(10)
  const indexLastCountry = currentPage * countriesPage
  const indexFirstCountry = indexLastCountry - countriesPage
  const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry);   
  const cantCountries = allCountries.length

  const numerito = Math.ceil(cantCountries/countriesPage)

  const arrayPages = PageNumbers(countriesPage, cantCountries)
  const cantPages = arrayPages.length


  if(currentPage > cantPages){
    setCurrentPage(1) 
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber) 
  }

  useEffect(() => {
    dispatch(getCountries());    
  },[]);



  const orderByName=(event)=>{
    dispatch(order(event.target.name))
  }

  const orderByPopulation=(event)=>{
    dispatch(population(event.target.name))
  }

  const filterCont=(event)=>{
    dispatch(byContinent(event.target.value))
  }

  const filterActivities = (event) => {
    dispatch()
  }

  const handlerSubmit=(event)=>{    
    setName(event.target.value)
  }

  const searchCountry=(event)=>{
    const regex= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/   
    event.preventDefault();
    if(!name) return alert('Ingrese un pais para continuar')
    if(!regex.test(name)) return alert('Solo se permiten letras')
    dispatch(getName(name))
    setName('')
  }

  const refresh=(event)=>{
    dispatch(getCountries(event))
  }

  return (
    <div className={style.homeCont}>
     
      <h1 className={style.subtitle}>PAISES</h1>
      <input  value={name} onChange={(event)=>handlerSubmit(event)} type="text" name="Buscar" placeholder="Buscar" />
      <button type="submit" onClick={searchCountry}>Search</button>
      <div>
        <button onClick={refresh}>
          Refresh
        </button>
      </div>

      <div>        
        <button name="az" onClick={orderByName}>A-Z</button>
        <button name="za" onClick={orderByName}>Z-A</button>
      </div>
      <div>
        <button name="mayorP" onClick={orderByPopulation}>+ Population</button>
        <button name="menorP" onClick={orderByPopulation}> - Population</button>
      <div>
      <div>
          
          <select onChange={filterCont} name="continent">
          <option value="">Continents...</option>
            <option value="Asia">ASIA</option>
            <option value="South America">AMERICA DEL SUR</option>
            <option value="North America">AMERICA DEL NORTE</option>
            <option value="Africa">AFRICA</option>
            <option value="Antarctica">ANTARTIDA</option>
            <option value="Europe">EUROPA</option>
            <option value="Oceania">OCEANIA</option>
          </select>
      </div>

      <div>        
        <select onChange={filterActivities} name="activities">
          <option>ACTIVITIES</option>

        </select>
      </div>
        
        <div>
          <Paginate
                      countriesPage={countriesPage}
                      allCountries={allCountries.length}
                      paginate={paginate}
                      currentpage={currentPage}
              />
        </div>

        </div>
        <Cards allCountry={currentCountries}/>
      </div>
    </div>
  );
};

export default Home;
