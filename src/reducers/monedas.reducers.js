const initialState = {
    items: []    
  };
  
export function monedas(state = initialState, action) {
    switch (action.type) {     
      case "MONEDAS_LISTA":
            return {
              ...state,
              items: action.response
            };            
      default:
        return state;
    }
  }
  