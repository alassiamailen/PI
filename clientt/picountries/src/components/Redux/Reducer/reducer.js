import {
  GET_COUNTRIES,  
  ORDER,
  POPULATION,
  BYCONTINENT,
  GET_DETAILS,
  GET_NAME,
  GET_ACTIVITIES,  
  FILTER_COUNTRIES_BY_ACTIVITIES  
  
} from "../Actions/action-types";


let initialState = {
  backUp:[],
  allCountries: [], 
  completedCountries: [], 
  countryDetail:[],
  allActivities:[],  
};


const reducer = (state = initialState, action) => {
  

  switch (action.type) {
    
    case GET_COUNTRIES:
      const selects = document.getElementsByTagName("select");
      for (let i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;
      }
      return {
        ...state,
        allCountries: [...action.payload],
        completedCountries: action.payload,   
        backUp: action.payload
      };

    case GET_ACTIVITIES:
      return{
        ...state, 
        allActivities: action.payload
      };

   
       
    case FILTER_COUNTRIES_BY_ACTIVITIES:
      const countries = state.completedCountries;
      const allActivities = state.allActivities
      const nameActivity = action.payload
      

      const mathAct=[]
      let countriesFinal=[]
        
        // busco el pais q tiene esa act
      if(nameActivity === "Select activity"){
        countriesFinal = countries        
        
      
      } else{
        
        if(nameActivity==="All activities"){
          allActivities.map((e)=>{
            return mathAct.push(e.Countries)
          })
        }else{
          allActivities.map((e) => {
            if(e.name===nameActivity){
              mathAct.push(e.Countries)              
            }
          })
        }
      } 

      const actividadesCoincidenAdentro = []

      for(let i=0; i<mathAct.length;i++){

        mathAct[i].map((e)=>{
          return actividadesCoincidenAdentro.push(e.name)
        })

      }      
       
        //quita repetidos
      const countriesNames = [...new Set(actividadesCoincidenAdentro)]

      for(let name of countriesNames){ 
        countriesFinal.push(countries.find((e)=>e.name === name))
      }
      

      return{
        ...state,
        allCountries:countriesFinal 
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
        let countriesFilter=[]

      if(action.payload==="continents"){
        countriesFilter=state.completedCountries
      }else{
        countriesFilter = [...state.completedCountries].filter(element =>
          element.continente === action.payload) 
      }

       

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
        
               
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
