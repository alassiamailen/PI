import axios from 'axios';
import { GET_COUNTRIES } from './action-types';

export const getCountries=()=>{
    return async(dispatch)=>{
        try {
            const response= await axios.get("http://localhost:3001/countries/")
            dispatch({
                type:GET_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }

}