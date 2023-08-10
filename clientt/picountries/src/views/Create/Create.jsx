import React, { useState } from "react";
import style from "./create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries} from "../../components/Redux/Actions/actionsGetCountries";
import { postActivity } from "../../components/Redux/Actions/actionPostActivity";

const Create = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.backUp);
  const [select,setSelect]= useState([]);

  useEffect(() => {
    dispatch(getCountries());

    return ()=>{


    }
  }, []);

  const [stateForm, setStateForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    arrCountry: [],
  });
  const [error, setError] = useState({
    name:"*Campo obligaotrio debe tener entre 5 y 30 caracteres Alfabéticos*",
    difficulty:"*Campo obligatorio*",
    duration:"",
    season:"*Campo obligatorio*",
    country:"*Campo obligatorio*"
  });  


  

  const handleChange = (event) => {
    setStateForm({
      ...stateForm,
      [event.target.name]:event.target.value

    })
    validate({
      ...stateForm,
      [event.target.name]:event.target.value

    },event.target.name)
  };
  const handleSubmit = (event) => {
    //para que no se recargue la pag
    event.preventDefault();
    // dispatch(postActivity(stateForm))

    console.log(stateForm)

  };

  const handleSelect = (event) => {
      
    setStateForm({      
      ...stateForm,
      arrCountry: [...stateForm.arrCountry, event.target.value],
    });

    const countries= allCountries.find((count)=>count.id === event.target.value)
    console.log(allCountries)
    setSelect([
      ...select,
      {
        id:event.target.value,
        name: countries.name,
        flag: countries.flagImage
      }
    ])
    if(stateForm.arrCountry.includes(event.target.value)){
      return alert('Este pais ya fue agregado')
    }
    if(stateForm.arrCountry.length>=5){
      return alert('Maximo 5 paises')
    }
  
    validate(
      
      stateForm,
        //  [event.target.name]: event.target.value,
      
      event.target.name
    );
  };
  const deleteCountry=(event)=>{

  }

  const filterCountries= allCountries.filter((c)=>!stateForm.arrCountry.includes(c.id))

  // const disable = () => {
  //   let disabled = true;
  //   for (let err in error) {
  //     if (error[err] === "") {
  //       disabled = false;
  //     } else {
  //       disabled = true;
  //       break;
  //     }
  //   }
  //   return disabled;
  // };
  const validate = (stateForm,name) => {
    const regex = /^[a-zA-Z\s]+$/
    if(name==="name"){
      console.log(name)
      if(stateForm.name === ""|| stateForm.name.length < 5 || stateForm.name.length > 30){
        setError({...error, name:"*Campo obligatorio debe tener entre 5 y 30 caracteres Alfabéticos*"})
      }   
      else {
        setError({...error, name:""})
      }     
    }
      
    if(name==="difficulty"){
      if( stateForm.difficulty !== "" || !stateForm.difficulty < 1 || !setStateForm.difficulty >5){
        setError({
          ...error,
          difficulty:""
        })
        return;
      }else{
         setError({
            ...error,
            difficulty:"*Solo valores entre 1 y 5*"
          })
          return;
        }
    }
    if(name==="season"){
      if(stateForm.season === "" || stateForm.season == "0"){
        setError({
          ...error,
          season:"*Campo obligatorio*"
        })        
      }else{
        setError({
          ...error,
          season:""
        })
      }
    }
    if(name==="country"){
      if(stateForm.arrCountry.length===0){
        setError({
          ...error,
          season:"*Campo obligatorio*"
        }) 
      }else{
        setError({
          ...error,
          season:""
        })
      }
    }        
    }
    
  
  return (
    <div className={style.formCont}>
      {console.log(stateForm)}
      <form onSubmit={handleSubmit}>
        <label className={style.letter}>Name</label>
        <input name="name" onChange={handleChange} type="text" />
        <label className={style.error}>{error.name}</label>
        
        
        <label className={style.letter}>Difficulty</label>
        <input name="difficulty" onChange={handleChange} type="range" min="1" max="5"/>
        <p className={style.error}>{stateForm.difficulty}</p>

        <label className={style.error}>{error.difficulty}</label>
        <label className={style.letter}>Duration</label>
        <input name="duration" onChange={handleChange} type="range" min="1" max="24"/>
        <p className={style.error}>{stateForm.duration}</p>
        

        <label className={style.letter}>Season</label>
        <select name="season" onChange={handleChange}>
          <option selected value="0">Select season...</option>
          <option name="verano">Verano</option>
          <option name="otoño">Otoño</option>
          <option name="primavera">Primavera</option>
          <option name="invierno">Invierno</option>
        </select>
        <label className={style.error}>{error.season}</label>
        

        <label className={style.letter}>Country</label>
        <select name="allCountries" id="country" onChange={handleSelect}>
          {/* este mapea  */}
          <option selected>Select country...</option>
          {filterCountries?.map((country, index) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <label className={style.error}>{error.country}</label>

        <div className={style.countries}>
          {/* muestra seleccionados*/}
          {select?.map((country) => {
            return (
              <div className={style.contCountry}>
                <p>{country.name}</p>
                <img src={country.flag} alt="img" />
                <button onClick={deleteCountry}>X</button>
              </div>
            );
          })}
        </div>

        <input
          className={style.submit}
          type="submit"
          value="Create Activity"
        />
      </form>
    </div>
  );
}


export default Create;
