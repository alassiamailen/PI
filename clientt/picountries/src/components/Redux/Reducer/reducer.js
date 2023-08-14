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
  Renderiza: [], //10
  allCountriesCompleto: [], //250
  currentPage: 0,  
  countryDetail:[],
  allActivities:[],
  
};


const reducer = (state = initialState, action) => {
  const items_per_page = 10;

  switch (action.type) {
    
    case GET_COUNTRIES:
      return {
        ...state,
        Renderiza: [...action.payload].splice(0, items_per_page),
        allCountriesCompleto: action.payload,   
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
       


    case PAGINATE:
      const next_page = state.currentPage + 1;
      const prev_page = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? next_page * items_per_page
          : prev_page * items_per_page;

      if ( action.payload === "next" && firstIndex >= state.allCountriesCompleto.length) {  return { ...state }} 
      else if (action.payload === "prev" && prev_page < 0) { return { ...state } }

      return {
        ...state,
        Renderiza: [...state.Renderiza].splice(
          firstIndex,
          items_per_page
        ),
        currentPage: action.payload === "next" ? next_page : prev_page,
      };

    case ORDER:
      if (action.payload === "az") {
        const inOrder = [...state.Renderiza].sort((prev, next) => {
          if (prev.name > next.name) return 1;
          if (prev.name < next.name) return -1;
          return 0;
        });
        return {
          ...state,
          Renderiza: [...inOrder].splice(0, items_per_page),
          currentPage: 0,
        };
      } else if (action.payload === "za") {
        const inOrder = [...state.Renderiza].sort((prev, next) => {
          if (prev.name > next.name) return -1;
          if (prev.name < next.name) return 1;
          return 0;
        });
        return {
          ...state,
          Renderiza: [...inOrder].splice(0, items_per_page),
          currentPage: 0,
        };
      }
      break;


    case POPULATION:
      if (action.payload === "mayorP") {
        const byPopulation = [...state.Renderiza].sort(
          (mayorP, menorP) => {
            if (menorP.poblacion > mayorP.poblacion) return 1;
            if (menorP.poblacion < mayorP.poblacion) return -1;
            return 0;
          }
        );
        return {
          ...state,
          Renderiza: [...byPopulation].slice(0, items_per_page),
          currentPage: 0,
        };
      } else if (action.payload === "menorP"){
        const byPopulation = [...state.Renderiza].sort(
          (mayorP, menorP) => {
            if (menorP.poblacion > mayorP.poblacion) return -1;
            if (menorP.poblacion < mayorP.poblacion) return 1;
            return 0;
          }
        );
        return {
          ...state,
          Renderiza: [...byPopulation].slice(0, items_per_page),
          currentPage: 0,
        };
      }
      break;
      
    case BYCONTINENT:
      const countriesFilter = [...state.allCountriesCompleto].filter(element =>
        element.continente === action.payload) 
      return{
        ...state,
        Renderiza:[...countriesFilter].splice(0,items_per_page),
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
        Renderiza:action.payload,
        allCountriesCompleto:action.payload,
               
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
