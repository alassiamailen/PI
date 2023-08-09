import { PAGINATE } from "./action-types"

export function paginate(direction){
    return async(dispatch)=>{
        try {
            dispatch({
                type: PAGINATE,
                payload:direction
            })
            
        } catch (error) {
            console.log(error)
        }

    }
}