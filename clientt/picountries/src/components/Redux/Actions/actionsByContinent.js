import { BYCONTINENT } from "./action-types";

export function byContinent(continent){
    return async(dispatch)=>{
        try {
            dispatch({
                type: BYCONTINENT,
                payload:continent
            })
            
        } catch (error) {
            console.log(error)
        }

    }
}