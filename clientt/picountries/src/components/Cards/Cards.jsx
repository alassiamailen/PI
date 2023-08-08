import React from 'react';
import style from './cards.module.css';
import Card from '../Card/Card';


const Countries = ({allCountry}) => {

  return (
    <div className={style.contCountries}>
      {
        allCountry?.map((country)=> <Card name={country.name} continente={country.continente} img={country.img}/>)
      }
    </div>
  )
}

export default Countries;