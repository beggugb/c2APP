const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
      id:'',
      nombre:'',
      codigo:'',
      pais:'Argentina'
    },   
  };
  
export function redes(state = initialState, action) {
    switch (action.type) {  
      case "REDES_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "REDES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "REDES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "REDES_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "REDES_RESET_ITEM":
        return {
          ...state,
          item: initialState.item         
        };
      case "REDES_RESET_DATA":
          return {
            ...state,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
        };  
      default:
        return state;
    }
  }
  