import React, { useState } from 'react';
import style from './create.module.css';

const Create = () => {

  const [stateForm, setState]=useState({
    name:"",
    email:"",
    tel:""
  });
  const handleChange =(event)=>{
    setState({
      ...stateForm,
      [event.target.name]: event.target.value
    })
    //validate recibe la modificacion actualizada ya que tarda un render mas en actualizarce
    validate({
      ...stateForm,
      [event.target.name]: event.target.value
    }, event.target.name)
  }
  const handleSubmit=(event)=>{
    //para que no se recargue la pag
    event.preventDefault()
    console.log(stateForm)
  }
const [error,setError]=useState({
  name:"*Este campo es obligatorio*",
  email:"*Este campo es obligatorio*",
  tel:""
})

const disable= ()=>{
let disabled= true;
for(let err in error){
  if(error[err]==="") {
    disabled=false;}
  else{
    disabled=true;
    break;
  }
}
return disabled;
}
const validate= (stateForm,name)=>{
  if(name==='name'){
    //si el input de name no esta vacio, seteame name en vacio
    if(stateForm.name!==""){
      setError({...error, name:""})
    }else setError({...error, name:"*Este campo es obligatorio*"})
  }
  if(name==='email'){
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i
    if(stateForm.email!==""){
      setError({...error, email:""})
    }else {
      setError({...error, email:"*Este campo es obligatorio*"})
      return;
    }
    if(regex.test(stateForm.email)){
      setError({...error, email:""})
    }else {
      setError({...error, email:"*Formato de email erroneo*"})
      return;
    }
  } 
  if(name==='tel') {
    if(isNaN(parseInt(stateForm.tel))){
      setError({...error, tel: "*Requiere formato numerico*"})
    }else{
      setError({...error, tel:""})
    }
  }

}
  return (
    <div className={style.formCont}>      
      <form onSubmit={handleSubmit}>
        <label className={style.letter}>Nombre</label>
        <input  name='name' onChange={handleChange} type="text" />
        <label className={style.error}>{error.name}</label>
        <label className={style.letter}>Email:</label>
        <input name='email' onChange={handleChange} type="text" />
        <label className={style.error}>{error.email}</label>
        <label className={style.letter}>Tel:</label>
        <input name='tel' onChange={handleChange} type="text" />
        <label className={style.error}>{error.tel}</label>
        <input disable={disable()} className={style.submit} type="submit"/>
      </form>
    </div>
  )
}

export default Create;