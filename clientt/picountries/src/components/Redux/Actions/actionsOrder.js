import { ORDER } from "./action-types";



export function order(direction){
    return async(dispatch)=>{
        try {
            dispatch({
                type: ORDER,
                payload:direction
            })
            
        } catch (error) {
            console.log(error)
        }

    }
}