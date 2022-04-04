import React,{useState, useCallback, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../actions'
import { Card, Row, Col, Modal, ModalBody, Button  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const RedView = () => {
  const dispatch = useDispatch() 
  const [component, setComponent] = useState('data');  
  const {nodo, ramas } = useSelector(state => state.usuarios)  
  const usuario = JSON.parse(localStorage.getItem('@userUnity'))
  
  
  /*const toggleModalView = () => {    
    let est = modalView === true ? false : true;             
    dispatch({type:'CLIENTES_VIEW',view:est})                
  };*/


  useEffect(() => {
    dispatch(crudActions.getRed('USUARIO_RED',usuario.id)) 

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
            <h6>RED</h6>
          </Col>
        </Row>            
      </div> 

      <Row>
          <Col>
          <div className="raizi">

          </div>
          <div className="raiz">
            <div className="nodo">
              <FontAwesomeIcon icon={faUser} className="nd"/>                
            </div>
            <FontAwesomeIcon icon={faArrowDown} className="hh"/>            
          </div>
          <div className="raizd">

          </div>  
          </Col>
      </Row>
      <Row>
          <Col>
            <div className="ramas">
             <div className="linea"></div>
             {ramas.map((item,index) => (   
              <Card className="neut" key={index}>
              <FontAwesomeIcon icon={faArrowDown} className="hh"/>
                <div className="hoja">                         
                  <FontAwesomeIcon icon={faUser} className="hj"/>  
                  <p>{item.nombres}</p>
                </div>              
              </Card> 
            ))}  
            </div>
          </Col>
      </Row>
      </div>
    </div>    
    </>
  )

};
export default RedView;
