const initialState = { 
user : {},
billetera: {
      cobrado: 0,
      estado: true,
      nroBilletera:0, 
      password: "",
      recibido: 0,
      saldo: 0,
      total: 0,
      usuarioId:0, 
    },
  item: {
    btc :"",
    btcWallet:'',
    email: '',
    estado: '',
    filename:'',
    liderId:0,
    nivel:0,
    nombres:'',
    password:'',
    rangoId:1,
    registrado:true,
    rolId: 1,
    telefono: 0,
    username:"",
    vigencia:""
  },
  ingreso:{
    suma:0,
    total:0
  },
  ingresos:{
    suma:0,
    total:0
  },
  nodo:{
    id:'',
    origen:0,
    raiz:0,
    usuario:{
      id:'',
      nombres:'',
      username:''
    }
  },
  ramas:[],
  movimientos:[]
}
  export function usuarios(state = initialState, action) {
    switch (action.type) {   
      case "USUARIO_ITEM":
        return {
          ...state,
          item: action.response.usuario,
          billetera: action.response.billetera,
          ingresos: action.response.ingreso
        };  
      case "MOVIMIENTOS_DATA":
          return {
            ...state,
            movimientos: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };   
      case "USUARIO_RED":
          return {
            ...state,
            nodo: action.response.nodo,
            ramas: action.response.ramas
            
      };       
      case 'LOGIN_SUCCESS':
        return {        
          ...state, 
            loggingIn: true,
            user: action.response
        };
      case 'LOGIN_USER':
        return {           
            ...state
        };
      case 'LOGIN_LOGOUT':
        return {           
            
        };                                          
      default:
        return state
    }
  }
  
  