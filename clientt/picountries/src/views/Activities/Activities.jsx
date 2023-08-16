/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../components/Redux/Actions/actionsGetActivities";
import style from "./activities.module.css";
import {filterCountriesByActivities} from "../../components/Redux/Actions/actionsFilterCountriesByActivities";
import {getCountries} from "../../components/Redux/Actions/actionsGetCountries";

const Activities= ()=>{
    const dispatch=useDispatch();
    const dependencia= useSelector((state)=>state);
    const [currentPAge,setCurrentPage]=useState(1);    

    useEffect(()=>{

      dispatch(getActivities());
      dispatch(getCountries(dependencia.allCountries))     
      
           
    }, [dispatch])

    let values= dependencia.allActivities;
    
    values= values.map((e)=>e.name)
      //quita repetidos
    const onlyValues= [...new Set(values)]
    

    const handlerActivity= (event)=>{
      
      dispatch(filterCountriesByActivities(event.target.value))
      setCurrentPage(1)
    }
    
    return(      
         <select className={style.selec} onChange={handlerActivity}>
          <option value="Select activity">Select activity</option>
          <option value="All activities">All activities</option>
          {onlyValues?.map((activity,index)=>{
            return(
              <option value={activity} key={index}>
                {activity}
              </option>
            )
          })}
         </select>
      
      

    );
}

export default Activities;