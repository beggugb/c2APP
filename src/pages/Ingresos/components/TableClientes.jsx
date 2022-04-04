import React,{useEffect, useCallback} from "react";
import { Table, Row, Col, Button  } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Pagination'

const TableClientes = ({getComponent}) => {
   const dispatch = useDispatch() 
   const { movimientos,total,pagina,paginas,modalView}= useSelector(state => state.usuarios)
   const usuario = JSON.parse(localStorage.getItem('@userUnity'))

   const makeHttpRequestWithPage = (page, num) =>{
    dispatch(crudActions.getData('MOVIMIENTOS_DATA','usuarios',page, num,usuario.id))      
  }
  

  useEffect(() => {
      makeHttpRequestWithPage(1,12)
      return () => {
      /*    cleanup*/
      console.log('clean table inventario')
      };
  }, []);

  return(
    <>    
    <Row>
      <Col>
      <div className="table-single">     
        <Table className="table-simple">
          <thead>
              <tr>  
                  <th width="15%">Código</th>
                  <th width="15%">Monto</th>
                  <th width="15%">Estado</th>
                  <th width="15%">Porcentaje</th>            
                  <th width="15%">Total</th>                              
                  <th width="10%"></th>                
              </tr>
          </thead>  
          {movimientos && (
              <tbody>
                  {movimientos.map((item) => (
                      <tr key={item.id}>                                                                           
                        <td>{item.id}</td>
                        <td>{item.monto}</td>
                        <td>{item.estado ? "Activo":"Pagado"}</td>
                        <td>{item.porcentaje}</td>
                        <td>{item.total}</td>
                      </tr>  
                      ))}
              </tbody>
          )}        
        </Table>
      </div>
      <div className="navegador" >
      <Pagination
        makeHttpRequestWithPage={ makeHttpRequestWithPage }
        total={total}
        paginas={paginas}
        current= {pagina} 
        pagina= {12}
      />
      </div>

      </Col>
    </Row>       
</>      
  )

};
export default TableClientes;
