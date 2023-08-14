import axios from "axios";
import { POST_ACTIVITY } from "./action-types";


export function postActivity(body){
   
    return async(dispatch)=>{
        try {
            const response= await axios.post("http://localhost:3001/activities/",body)

            alert('Actividad creada con éxito!')
        
            return dispatch({
                type: POST_ACTIVITY,
                payload: response.data
            })
        } catch (error) {             
            alert(error.response.data.error)
        }

    }
}