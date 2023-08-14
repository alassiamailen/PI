import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./nav.module.css";


const Navbar = () => {
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
        <div className={style.activity}>
          <p>
            <Link className={style.link} to={"/activities"}>
              My Activities
            </Link>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
