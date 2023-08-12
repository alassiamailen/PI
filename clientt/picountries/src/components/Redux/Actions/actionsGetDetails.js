import { GET_DETAILS } from "./action-types";
import axios from "axios";

export function getDetails (id){
    return async(dispatch)=>{
        try {
            const country= await axios.get(`http://localhost:3001/countries/${id}`)
            
            return dispatch({
                type: GET_DETAILS,
                payload: country.data
                
            })
        } catch (error) {
            console.log(error)
        }
    }
}
