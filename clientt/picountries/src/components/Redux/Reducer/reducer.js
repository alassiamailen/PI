import { GET_COUNTRIES,PAGINATE,ORDER} from "../Actions/action-types";


let initialState={
    allCountries:[],
    allCountriesBackUp:[],
    currentPage:0,
}

const reducer=(state= initialState,action)=>{
    const items_per_page=10;
    switch(action.type){
        case GET_COUNTRIES:
            
            return{
                ...state,
                allCountries:[...action.payload].splice(0,items_per_page),
                allCountriesBackUp:action.payload
            }
            break;
        case PAGINATE:
            const next_page= state.currentPage + 1;
            const prev_page=state.currentPage -1;
            const firstIndex= action.payload === "next" ? next_page * items_per_page : prev_page * items_per_page;

           if(action.payload === "next" && firstIndex >= state.allCountriesBackUp.length) {return {...state}}
          else if(action.payload==="prev" && firstIndex <0) {return{...state}}

            return{
                ...state,
                allCountries:[...state.allCountriesBackUp].splice(firstIndex,items_per_page),
                currentPage: action.payload ==="next" ? next_page : prev_page
            }

        case ORDER:
            if(action.payload === "az"){
                const inOrder= [...state.allCountriesBackUp].sort((prev,next)=>{
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                    return 0
                })
                return{
                    ...state,
                    allCountries:[...inOrder].splice(0,items_per_page),
                    allCountriesBackUp: inOrder,
                    currentPage:0
                }
            }else if(action.payload==="za"){
                const inOrder= [...state.allCountriesBackUp].sort((prev,next)=>{
                    if(prev.name > next.name) return -1
                    if(prev.name < next.name) return 1
                    return 0
                })
                return{
                    ...state,
                    allCountries:[...inOrder].splice(0,items_per_page),
                    allCountriesBackUp: inOrder,
                    currentPage:0
                }
            }
            return{
                
            }


        default:
        return{
            ...state
        }
    }
    
}


export default reducer;