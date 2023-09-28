import React, { useState } from "react";
import style from "./create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries} from "../../components/Redux/Actions/actionsGetCountries";
import { postActivity } from "../../components/Redux/Actions/actionPostActivity";


const Create = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.backUp);
  let [select,setSelect]= useState([]);

  useEffect(() => {
    dispatch(getCountries());
    
    return ()=>{
     
    }
  }, [dispatch]);

  const [stateForm, setStateForm] = useState({
    name: "",
    difficulty: "",
    duration:"",
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
    const selectedCountries= select.map((e)=>{return e.id})
    event.preventDefault();
    const form= document.getElementById("form")
    form.reset();
    
    const body={
      nombre: stateForm.name,
      dificultad: stateForm.difficulty,
      duracion: parseInt(stateForm.duration),
      temporada: stateForm.season,
      pais: selectedCountries,      
    }    

    dispatch(postActivity(body))
    setStateForm({
      name: "",
      difficulty: "",
      duration:"",
      season: "",
      arrCountry: [],
    })  
    setSelect([]) 
     
    
  };

  const handleSelect = (event) => {
  
    //obtengo la info del pais    
    const countries= allCountries.find((count)=>count.id === event.target.value)    

      const obj= {
        id:event.target.value,
        name: countries.name,
        flag: countries.img,        
      } 
      // para quita el delay cnd agrego el 1 pais
    if(select.length === 0){
      setError({
        ...error,
        country:""
      })
    }

    
    setSelect([
      ...select,
      obj          
    ])       
     
    if(select.length > 4){
      return alert('Máximo 5 paises')
    }
  
  };
    const deleteCountry=(id)=>{

      const selectFilter = select.filter((c)=> c.id!== id)
      setSelect([...selectFilter])       
        
      if(select.length === 1){
        setError({
          ...error,
          country:"*Campo obligatorio*"
        }) 
      }else{
        setError({
          ...error,
          country:""
        })
      }
          
    }    
        
    //elimino los paises que selecciona el cliente
  const filterCountries= allCountries.filter((count)=>!stateForm.arrCountry.includes(count.id)) 
  

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
    const regex = /^[a-zA-Z\s]+$/
    if(name==="name"){
      
      if(stateForm.name === ""|| stateForm.name.length < 5 || stateForm.name.length > 30 || !regex.test(stateForm.name)){
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
        
    }    
  
  return (
    <div className={style.formCont}>
     
      <form id="form" onSubmit={handleSubmit}>
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
        <select name="season" onChange={handleChange} defaultValue="Verano">
          <option selected value="0">Select season...</option>
          <option >Verano</option>
          <option>Otoño</option>
          <option>Primavera</option>
          <option>Invierno</option>
        </select>
        <label className={style.error}>{error.season}</label>
        

        <label className={style.letter}>Country</label>
        <select  name="arrCountry"  id="country" onChange={handleSelect}>
          {/* este mapea  */}
          <option selected>Select country...</option>
          {filterCountries?.map((country) => {
            return (
              <option key={country.id} value={country.id}>
              {country.name}
            </option>
            )
            }
          )}
          
        </select>
        <label className={style.error}>{error.country}</label>
        

        <div className={style.countries}>
          {/* muestra seleccionados*/}
          {select?.map((country) => {
            return (
              <div className={style.contCountry}>
                <p>{country.name}</p>
                <img src={country.flag} alt="img" />
                <button type="button" onClick={()=>deleteCountry(country.id)}>X</button>
              </div>
            );
          })}
        </div>

        <input
         disabled={disable}
          className={style.submit}
          type="submit"
          value="Create Activity"
        />
      </form>
    </div>
  );
}


export default Create;
