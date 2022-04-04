import React,{ useEffect, useCallback, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { Nav, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { usuarioActions} from "../../actions"
import logo from "../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Ingresos from "../../pages/Ingresos/ClientesView.jsx"
import Red from "../../pages/Red/RedView.jsx"


function Admin(){
    const dispatch = useDispatch()
    const [itemr,setItemr] = useState([])    
    const modulos = JSON.parse(localStorage.getItem('@userItems'))
    const usuario = JSON.parse(localStorage.getItem('@userUnity'))    
    const changeModule = useCallback((name, tab, pky) =>{
        let items = [...itemr];
        modulos.map((prop, key)=>{
            let dato = {
                path: prop.path,
                name: prop.name,
                icon: prop.icon,
                component: verificar(prop.component),
                layout: prop.layout
            };
            items.push(dato);
            return null;
        })
        setItemr(items)
    })
    
    const verificar = (component) => {
        switch (component) {
          case "Dashboard":
            return Dashboard;                
          case "Ingresos":
            return Ingresos;
          case "Red":
            return Red;
          default:
            return null;
        }
      };
    
    const getRoutes = (routes) =>{
        return routes.map((prop, key) =>{
            if(prop.layout === '/admin'){
                return(
                    <Route
                       path={prop.layout + prop.path}
                       component={prop.component}
                       key={key} 
                    />
                );
            }else{
                return null;
            }
        })
    };
    
    const logoutt = () => {    
        dispatch(usuarioActions.logout())  
      };
    
    useEffect(() => {        
        changeModule();
        return () => {
         
        };
    }, []);

return(
    <div className="wrapper"> 
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo mb-2">
                    <div className="logo-img text-center">
                        <img src={logo} /> 
                    </div>
                </div>
                <div className="username text-white">
                    <p>Usuario: { usuario.nombres } </p>
                    <Button className="btn btn-danger btn-xp" onClick={() => {logoutt()}} >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Button> 
                </div>
                <div className="content">
                <Nav>
                    <li>
                        <NavLink
                            to="/admin/dashboard"
                            className="nav-link"
                            activeClassName="active"
                        >                        
                            Dashboard                        
                        </NavLink>
                    </li> 
                    {itemr.map((prop, key) => {
                        if (prop.redirect) return null;
                        return (
                            <li key={key}>
                            <NavLink
                                to={prop.layout + prop.path}
                                className="nav-link"
                                activeClassName="active"                                                  
                            > 
                            {prop.name}                    
                            </NavLink>
                            </li>
                        );
                    })} 
                </Nav>  
                </div>       
            </div>
        </div>
        <div className="main-panel" > 
            <div className="nav-unity">                                                                                                     
            <Switch>   
                {getRoutes(itemr)}
                <Route path="/admin/dashboard" component={Dashboard} />               
            </Switch>        
            </div>
        </div>        
    </div>    
)    

}
export default Admin;
