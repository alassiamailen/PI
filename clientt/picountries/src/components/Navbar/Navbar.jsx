import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./nav.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../components/Redux/Actions/actionsGetName";



const Navbar = () => {
  const [name,setName]= useState('');
  const dispatch = useDispatch();

  const searchCountry=(event)=>{
    const regex= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/   
    event.preventDefault();
    if(!name) return alert('Ingrese un pais para continuar')
    if(!regex.test(name)) return alert('Solo se permiten letras')
    dispatch(getName(name))
    setName('')
  }
  const handlerSubmit=(event)=>{    
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
        <div>
           <input className={style.search} value={name} onChange={(event)=>handlerSubmit(event)} type="text" name="Buscar" placeholder="Buscar" />
           <button className={style.but} type="submit" onClick={searchCountry}>Search</button>
        </div>     
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
