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
        <p>
          <Link className={style.p} to={"/home"}>
            Home
          </Link>
        </p>
        <p>
          <Link className={style.p} to={"/create"}>
            CreatActivity
          </Link>
        </p>
      </div>
      <div>       
      </div>
    </div>
  );
};

export default Navbar;
