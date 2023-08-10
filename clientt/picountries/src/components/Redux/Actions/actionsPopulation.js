import {POPULATION} from "./action-types";

export function population(direction){
    return async(dispatch)=>{
        try {
            dispatch({
                type: POPULATION,
                payload:direction
            })
            
        } catch (error) {
            console.log(error)
        }

    }
}