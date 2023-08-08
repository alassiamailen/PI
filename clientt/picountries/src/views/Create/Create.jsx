import React, { useState } from "react";
import style from "./create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../components/Redux/Actions/actionsGetCountries";

const Create = () => {
  const dispatch= useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  console.log("allcountries", allCountries);
  const [stateForm, setStateForm] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    arrCountry: [],
  });
  useEffect(() => {
    
    dispatch(getCountries());
  },[]);

  const handleChange = (event) => {
    setStateForm({
      ...stateForm,
      [event.target.name]: event.target.value,
    });
    //validate recibe la modificacion actualizada ya que tarda un render mas en actualizarce
    validate(
      {
        ...stateForm,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };
  const handleSubmit = (event) => {
    //para que no se recargue la pag
    event.preventDefault();
    console.log(stateForm);
  };
  const [error, setError] = useState({
    name: "*Este campo es obligatorio*",
    dificultad: "",
    duracion: "",
    temporada: "",
  });

  const handleSelect = (event) => {
    const name = event.target.value;

    setStateForm({
      ...stateForm,
      arrCountry: [...stateForm.arrCountry, name],
    });
    console.log(stateForm.arrCountry);
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
  const validate = (stateForm, name) => {
    if (name === "name") {
      //si el input de name no esta vacio, seteame name en vacio
      if (stateForm.name !== "") {
        setError({ ...error, name: "" });
      } else setError({ ...error, name: "*Este campo es obligatorio*" });
    }
  };
  return (
    <div className={style.formCont}>
      <form onSubmit={handleSubmit}>
        <label className={style.letter}>Nombre</label>
        <input name="name" onChange={handleChange} type="text" />
        <label className={style.error}>{error.name}</label>

        <label className={style.error}>{error.email}</label>
        <label className={style.letter}>Dificultad</label>
        <input
          name="difficulty"
          onChange={handleChange}
          type="number"
          min="1"
          max="5"
          step="1"
        />
        <label className={style.letter}>Duracion</label>
        <input
          name="duration"
          onChange={handleChange}
          type="number"
          min="1"
          max="24"
          step="1"
        />
        <label className={style.letter}>Temporada</label>
        <select>
          <option>Verano</option>
          <option>Otoño</option>
          <option>Invierno</option>
          <option>Primavera</option>
        </select>

        <label className={style.letter}>Pais</label>
        <select value="country" onChange={handleSelect}>
          {/* este mapea  */}
          <option value="">Seleccioa un pais...</option>
          {allCountries.map((country, index) =>(
            <option key={index} value={country.value}>{country.name}</option>
          ))}
        </select>

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
};

export default Create;
