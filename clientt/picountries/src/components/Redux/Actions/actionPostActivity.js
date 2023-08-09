import axios from "axios";


export function postActivity(stateForm){
    return async(dispatch)=>{
        try {
            const response= await axios.post("http://localhost:3001/activities/",stateForm)
            
        } catch (error) {
            console.log(error)
        }

    }
}