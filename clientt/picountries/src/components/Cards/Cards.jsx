import React from 'react';
import style from './cards.module.css';
import Card from '../Card/Card';


const Countries = ({allCountry}) => {

  return (
    <div className={style.contCountries}>
      {
        allCountry?.map((country)=> <Card key={country.id} id={country.id} name={country.name} continente={country.continente} img={country.img} capital={country.capital} poblacion={country.poblacion}/>)
      }
    </div>
  )
}

export default Countries;