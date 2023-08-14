import { GET_ACTIVITIES } from "./action-types";
import axios from "axios";

export function getActivities(){
    return async (dispatch)=>{
        try {        
            const response = await axios.get('http://localhost:3001/activities/')    
            dispatch({
                type:GET_ACTIVITIES,
                payload: response.data         
            })
        } catch (error) {
            console.log(error)
        }
    }
}