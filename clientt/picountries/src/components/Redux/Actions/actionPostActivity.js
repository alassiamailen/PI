import axios from "axios";
import { POST_ACTIVITY } from "./action-types";


export function postActivity(body){
    console.log("ACTION")
    return async(dispatch)=>{
        try {
            const response= await axios.post("http://localhost:3001/activities/",body)
        
            return dispatch({
                type: POST_ACTIVITY,
                payload: response.data
            })
        } catch (error) { 
            console.log(error)
        }

    }
}