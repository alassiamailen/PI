import { GET_COUNTRIES } from "../Actions/action-types";

let initialState={
    allCountries:[],
    allCountriesBackUp:[]
}

const reducer=(state= initialState,action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            console.log("algo")
            return{
                ...state,
                allCountries:action.payload,
                allCountriesBackUp:action.payload
            }

        default:
        return{
            ...state
        }
    }
    
}


export default reducer;