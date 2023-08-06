import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './nav.module.css';

const Navbar = () => {
  return (
    <div className={style.nav}>
        <div className={style.navImg}> <Link to={'/'}><img src="https://i.gifer.com/3IsN.gif" alt="imagen de paises" /></Link></div>
        <div className={style.navLink}>
           <p className= {style.p}><Link to={'/home'}>Home</Link></p>
           <p className= {style.p}> <Link to={'/create'}>Contac</Link></p>          
        </div>
        <div>
            <form>
                <input type='text' name="" id=""/>
                <input className={style.sub} type='submit' name="" id=""/>

                
            </form>
        </div>


    </div>
  )
}

export default Navbar;