import {
  GET_COUNTRIES,
  PAGINATE,
  ORDER,
  POPULATION,
  BYCONTINENT,
  GET_DETAILS,
  GET_NAME,
  GET_ACTIVITIES,
  DELETE_ACTIVITIES,  
  
} from "../Actions/action-types";


let initialState = {
  backUp:[],
  allCountries: [], //10
  allCountriesFiltered: [], //250 
  countryDetail:[],
  allActivities:[],  
};


const reducer = (state = initialState, action) => {
  

  switch (action.type) {
    
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: [...action.payload],
        allCountriesFiltered: action.payload,   
        backUp: action.payload
      };

    case GET_ACTIVITIES:
      return{
        ...state, 
        allActivities: action.payload
      };

    case DELETE_ACTIVITIES:
      return{
        ...state,
        allActivities:state.allActivities.filter((a)=>a.id !== action.payload)
      }
       


    
    case ORDER:
      if (action.payload === "az") {
        const inOrder = [...state.allCountries].sort((prev, next) => {
          if (prev.name > next.name) return 1;
          if (prev.name < next.name) return -1;
          return 0;
        });
        return {
          ...state,
          allCountries: [...inOrder],
          currentPage: 0,
        };
      } else if (action.payload === "za") {
        const inOrder = [...state.allCountries].sort((prev, next) => {
          if (prev.name > next.name) return -1;
          if (prev.name < next.name) return 1;
          return 0;
        });
        return {
          ...state,
          allCountries: [...inOrder],
          currentPage: 0,
        };
      }
      break;


    case POPULATION:
      if (action.payload === "mayorP") {
        const byPopulation = [...state.allCountries].sort(
          (mayorP, menorP) => {
            if (menorP.poblacion > mayorP.poblacion) return 1;
            if (menorP.poblacion < mayorP.poblacion) return -1;
            return 0;
          }
        );
        return {
          ...state,
          allCountries: [...byPopulation],
          currentPage: 0,
        };
      } else if (action.payload === "menorP"){
        const byPopulation = [...state.allCountries].sort(
          (mayorP, menorP) => {
            if (menorP.poblacion > mayorP.poblacion) return -1;
            if (menorP.poblacion < mayorP.poblacion) return 1;
            return 0;
          }
        );
        return {
          ...state,
          allCountries: [...byPopulation],
          currentPage: 0,
        };
      }
      break;
      
    case BYCONTINENT:
      const countriesFilter = [...state.allCountriesFiltered].filter(element =>
        element.continente === action.payload) 
      return{
        ...state,
        allCountries:[...countriesFilter],
        currentPage:0
      }      

    case GET_DETAILS:        
      return{
          ...state,
          countryDetail: action.payload
      }
    case GET_NAME:
      return{
        ...state,
        allCountries:action.payload,
        allCountriesFiltered:action.payload,
               
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
