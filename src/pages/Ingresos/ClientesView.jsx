import React,{useState, useCallback, useEffect} from "react";
import TableClientes from "./components/TableClientes";
import SearchCliente from "./components/SearchCliente";
import EditCliente from "./components/EditCliente";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../actions'
import { Row, Col, Modal, ModalBody, Button  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faList, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SubMenu from '../../components/subMenu.jsx';
import { ClienteRouter } from '../../routes'
import ClienteResumen from "./components/ClienteResumen";

const ClienteView = () => {
  const dispatch = useDispatch() 
  const [component, setComponent] = useState('data');  
  const { modalView } = useSelector(state => state.usuarios)  
  
  const toggleModalView = () => {    
    let est = modalView === true ? false : true;             
    dispatch({type:'CLIENTES_VIEW',view:est})                
  };

  const getComponent = useCallback((io, key) =>{    
      switch(io){
        case 'data':
          setComponent(<><TableClientes getComponent={getComponent}/></>)
          break;    
        case 'new':
          setComponent(<EditCliente/>)
          break;
        case 'edit':
          dispatch(crudActions.getItem('CLIENTES_ITEM','clientes',key)) 
          setComponent(<EditCliente/>)
          break;    
        default:
          break;
      }
  },[]);

  useEffect(() => {
    getComponent('data',1)

    return () => {
      console.log('descarga cliente')
    };
  }, []);

  return(
    <>    
    <div className="content">     
      <div className="main-contenido">
        
         <div className="submenub mt-4">      
        <Row>
          <Col className="tabsb" md={2}>
            <h6>Ingresos</h6>
          </Col>
                
        </Row>            
      </div> 
        {component}  
      </div>
    </div>    
    </>
  )

};
export default ClienteView;
