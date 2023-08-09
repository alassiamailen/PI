import React, { useState } from "react";
import style from "./create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries} from "../../components/Redux/Actions/actionsGetCountries";
import { postActivity } from "../../components/Redux/Actions/actionPostActivity";

const Create = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [stateForm, setStateForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    arrCountry: [],
  });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleChange = (event) => {
    setStateForm({
      ...stateForm,
      [event.target.name]: event.target.value,
    });
    //validate recibe la modificacion actualizada ya que tarda un render mas en actualizarce
   setError(validate(
    {
      ...stateForm,
      [event.target.name]: event.target.value,
    },
    event.target.name
  ))
  };
  const handleSubmit = (event) => {
    //para que no se recargue la pag
    event.preventDefault();
    dispatch(postActivity(stateForm))

  };

  const handleSelect = (event) => {
    const name = event.target.value;   
    if(stateForm.arrCountry.includes(event.target.value)){
      return alert('Este pais ya fue agregado')
    }
    if(stateForm.arrCountry.length>=5){
      return alert('Maximo 5 paises')
    }
    setStateForm({
      
      ...stateForm,
      arrCountry: [...stateForm.arrCountry, name],
    });
  
    validate(
      
      stateForm,
        //  [event.target.name]: event.target.value,
      
      event.target.name
    );
  };

  const disable = () => {
    let disabled = true;
    for (let err in error) {
      if (error[err] === "") {
        disabled = false;
      } else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };
  const validate = (stateForm,name) => {
    const regex = /^[a-zA-Z\s]{5,30}$/;

    let errors={};          
      if (!stateForm.name) {
        error.name="*Este campo es obligatorio*"
      } 
      if(stateForm.name.length<5 || stateForm.name.length>30){
        errors.name="*El nombre debe tener entre 5 y 30 caracteres*"
      }
      if(regex.test(stateForm.name)){
        errors.name="*El nombre no puede ser numerico*"
      }
      if(stateForm.season===""){
        errors.season="*Este campo es obligatorio*"
      }
      if(!stateForm.arrCountry.length){
        errors.country="*Este campo es obligatorio*"
      } 
      return errors;       
    }
    
  
  return (
    <div className={style.formCont}>
      {console.log(stateForm)}
      <form onSubmit={handleSubmit}>
        <label className={style.letter}>Name</label>
        <input name="name" onChange={handleChange} type="text" />
        {error.name && <p className={style.error}>{error.name}</p>}
        
        <label className={style.letter}>Difficulty</label>
        <input
          name="difficulty"
          onChange={handleChange}
          type="number"
          min="1"
          max="5"
          step="1"
        />
        <label className={style.letter}>Duration</label>
        <input
          name="duration"
          onChange={handleChange}
          type="number"
          min="1"
          max="24"
          step="1"
        />
        <label className={style.letter}>Season</label>
        <select name="season" onChange={handleChange}>
          <option  key={1} value="">Select season... </option>
          <option key={2}>Verano</option>
          <option key={3}>Otoño</option>
          <option key={4}>Primavera</option>
          <option key={5}>Invierno</option>
        </select>
        {error.season && <p className={style.error}>{error.season}</p>}

        <label className={style.letter}>Country</label>
        <select name="countries" onChange={handleSelect}>
          {/* este mapea  */}
          <option key={6} value="">Select country...</option>
          {allCountries.map((country, index) => (
            <option key={index} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>
        {error.country && <p className={style.error}>{error.country}</p>}

        <div className={style.countries}>
          {/* muestra seleccionados*/}
          {stateForm.arrCountry.map((country) => {
            return (
              <div className={style.contCountry}>
                <p>{country}</p>
              </div>
            );
          })}
        </div>

        <input
           disabled={disable()}
          className={style.submit}
          type="submit"
          value="Create Activity"
        />
      </form>
    </div>
  );
}


export default Create;
