import React from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import style from "./nav.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../components/Redux/Actions/actionsGetName";
import { useEffect } from "react";



const Navbar = () => {
  const [name,setName]= useState('');
  const dispatch = useDispatch();
  const location= useLocation();

  useEffect(()=>{
    dispatch(getName(name))
  },[dispatch,name])

  const handlerSubmit=(event)=>{
   dispatch(getName(event.target.value))
  }

  const searchCountry=(event)=>{ 
    setName(event.target.value)
  }


  return (
    <div className={style.nav}>
      <div className={style.navImg}>
        {" "}
        <Link to={"/"}>
          <img src="https://i.gifer.com/3IsN.gif" alt="imagen de paises" />
        </Link>
      </div>
      <div className={style.navLink}>
        <div className={style.p}>
        
            <Link to={"/home"}>
            <img src="https://iili.io/HDcaydP.th.png" alt="" />
            </Link>            
         
        </div>
        <div className={style.p}>
          <p>
            <Link className={style.link} to={"/create"}>
              Creat Activity
            </Link>
          </p>
        </div>  
        {
          location.pathname === ('/home') &&
           <form className={style.ser} onSubmit={handlerSubmit}>            
              <input className={style.search} value={name} onChange={(event)=>searchCountry(event)} type="text" name="Buscar" placeholder="Search Countries" />
          </form>     
        }
        
      </div>
      
    </div>
  );
};

export default Navbar;
