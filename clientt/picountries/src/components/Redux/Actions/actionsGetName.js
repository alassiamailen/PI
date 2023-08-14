import { GET_NAME } from "./action-types";
import axios from "axios";

export function getName(name){
    return async (dispatch)=>{
        try {
          const countryResponse= await axios.get(`http://localhost:3001/countries/name?name=${name}`)  
          const countryData= countryResponse.data;
          
         
          return dispatch({
            type: GET_NAME,
            payload: countryData
          })
        } catch (error) {
            console.log(error)
        }

    }
}