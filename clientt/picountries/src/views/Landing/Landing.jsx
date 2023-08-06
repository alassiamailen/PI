import React from 'react';
import style from './landing.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';



const Landing = () => {
  return (
    <div className={style.landingCont}>
      <div className={style.imgCont}>
        <img className={style.pic} src="https://cdn.pixabay.com/photo/2018/03/15/16/11/background-3228704_1280.jpg" alt="imagenMundi" />
      </div>
      
      <div className={style.contButton}>
      <button className={style.button}><Link to= {'/home'}>INGRESAR</Link></button>
      </div>
      
    </div>
  )
}

export default Landing;