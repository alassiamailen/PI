/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../components/Redux/Actions/actionsGetActivities";
import style from "./activities.module.css";
import { deleteActivities } from "../../components/Redux/Actions/actionsDeleteActivities";




const Activities= ()=>{
    const dispatch=useDispatch();
    const allActivities= useSelector((state)=>state.allActivities);
    console.log(allActivities,"acti")

    

    useEffect(()=>{

      dispatch(getActivities());
      return ()=>{}
      
    }, [])
    
    const [aux, setAux] = useState(false);
    const deleteActivity=(id)=>{
      dispatch(deleteActivities(id))
      aux ? setAux(false) : setAux(true);
    }
  
    

    return(
      <div>
         
      {allActivities?.map((act)=>{
        return(
          <div className={style.contP}>
            <p className={style.p}>Nombre: {act.name}</p>
            <p className={style.p}> Dificultad: {act.dificultad}</p>
            <p className={style.p}>Duracion: {act.duracion}</p>
            <p className={style.p}>Temporada: {act.temporada}</p>
            {act.Countries?.map((c)=>{
               return(
              <div>
                <p className={style.p}>{c.name}</p>
                <img className={style.img} src={c.img} alt="img" />
              </div>
                )
            })}
           <div className={style.button}>
           <button onClick={()=>{deleteActivity(act.id)}} className={style.x}>✖</button>
           </div>
            
          </div>
        )
      })}

      </div>
    );
}


export default Activities;