import React, {useEffect} from "react";
import { Row, Col, Card  } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faSitemap, faWallet, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import QRCode from "qrcode.react";

const Dashboard = () => {
  const dispatch = useDispatch() 
  const { items } = useSelector(state => state.monedas)  
  const { item, billetera, ingresos } = useSelector(state => state.usuarios)  

  const usuario = JSON.parse(localStorage.getItem('@userUnity'))
  const APP = "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/"
  useEffect(() => {
    /*dispatch(crudActions.getMonedas()) */
    dispatch(crudActions.getItem('USUARIO_ITEM','usuarios/item',usuario.id)) 
    return () => {
      console.log('descarga cliente')
    };
  }, []);

  return(
    <div className="content">     
      <div className="main-contenido">
      
        <Row>        
          <Col md="3">                                    
            <Card className="cardi" >
            <div className="cardif">
              <div className="cardif-left">
              <FontAwesomeIcon icon={faDollarSign}  />  
              </div>        
              <div className="cardif-right">              
                <h6>Ingresos</h6>
                <p>1.014 Total</p>
                <p>3352410.14  Suma</p>
              </div>  
            </div>
            </Card>             
          </Col>     
          <Col md="3">                                    
            <Card className="cardi" >
            <div className="cardif">              
              <div className="cardif-left">
              <FontAwesomeIcon icon={faSitemap} />  
              </div>        
              <div className="cardif-right">              
                <h6>Red</h6>
                <p>2 Miembros</p>
                <p>1 Nivel</p>
              </div>  
            </div>
            </Card>             
          </Col>     
          <Col md="3">                                    
            <Card className="cardi" >
            <div className="cardif">
              
              <div className="cardif-left">
              <FontAwesomeIcon icon={faWallet}  />  
              </div>        
              <div className="cardif-right">              
                <h6>Billetera</h6>
                <p>{billetera.saldo} Saldo</p>
                <p>{billetera.total} Total</p>
              </div>  
            </div>
            </Card>             
          </Col>     
          <Col md="3">                                    
            <Card className="cardi" >
            <div className="cardif">
              <div className="cardif-left">
              <FontAwesomeIcon icon={faMoneyBill} />  
              </div>        
              <div className="cardif-right">              
                <h6>Movimientos</h6>
                <p> 42 mov.</p>
              </div>  
            </div>
            </Card>             
          </Col>               
        </Row> 

        <Row className="mt-4"> 
          <Col md="8">
            <Card>
              <div className="wallet">
                <div className="wl">
                  <p>Total Balance</p>
                  <p><b>$ 12,996.86</b></p>
                  <h5>+$407.66(614%)</h5>
                </div>
                <div className="wr">
                <QRCode value={item.btc} 
                style={{  width: 100, height: 100,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>
                </div>              
              </div>
              <div className="dwallet">
                  <p>Nombre : {item.nombres}</p>
                  <p>Email:  {item.email}</p>
                  <p>Username :{item.username}</p>
                  <p>Nivel: {item.nivel}</p>
                  <p>Wallet :{item.btc}</p>
                  <p>Estado :{item.estado}</p>
              </div>
            </Card>
          </Col>
          <Col md="4" className="walletr">
            <h6>Mercado</h6>
      {items.map((item,index) => (                                         
        <Card  key={index}>
        <div className="moneda">
          <div className="imagen">
          <img alt="articulo"
className="text-center moneimg" 
src={APP + item.filename  }/> 
          </div>
          <div className="nombre">              
          <p>{item.name}</p>                          
          <p>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.price_usd)}</p>           
          </div>  
        </div>
        </Card>                   
      ))}                             
    
          </Col>
        </Row>   
      </div>
    </div>    
  )

};
export default Dashboard;
