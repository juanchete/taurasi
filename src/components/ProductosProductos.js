import React, { Component } from 'react'
import aglianico from '../assets/img/brand/aglianico-sannio-dop-munifico-vinicola-del-sannio.png';
import falanghini from '../assets/img/theme/p_falanghinanew.png';
import {
    Container,
    Row,
    Col,
    ListGroupItem,
    ListGroup
} from "reactstrap";

class ProductosProductos extends Component {
    render() {
        return (

            <div className='bg-white' id="who">

            <Container>
            <br/>
            
            <br></br>
            
                <Row>
                    
                    <Col className=" vertical-center">
                    <ul className="list-group small letra text-dark">
                                
                        <li className="list-group-item"><b>Nombre:</b>  Aglianico Beneventano IGP</li>
                        <li className="list-group-item"><b>Origen:</b> Castelvenere (Bn), Italia.</li>
                        <li className="list-group-item"><b>Cepa:</b> 100% Falanghina. </li>
                        <li className="list-group-item"><b>Visual:</b> Amarillo pálido brillante, con reflejos verdosos.</li>
                        <li className="list-group-item"><b>Olfato:</b> Frutal y floreal, intenso y persistente.</li>
                        <li className="list-group-item"><b>Gusto:</b> Fresco, agradable y de buena acidez.</li>
                    
                    </ul>



                    </Col>
                    <br/>
                    <Col className="vertical-center">
                        <img src={falanghini} alt='Aglianico' className="tamano-foto-falan img-fluid" />
                    </Col>
                </Row>
                <br/>
                <hr/>
                
                <Row>
                <Col className="vertical-center">
                <img src={aglianico} alt='Falanghina' className="tamano-foto-aglia img-fluid" />
                </Col>
                    <Col className=" vertical-center">
                    <ul className="list-group small letra text-dark">
                                
                        <li className="list-group-item"><b>Nombre:</b>  Aglianico Beneventano IGP</li>
                        <li className="list-group-item"><b>Origen:</b> Castelvenere (Bn), Italia.</li>
                        <li className="list-group-item"><b>Cepa:</b> 100% Aglianico. </li>
                        <li className="list-group-item"><b>Visual:</b> Color rubí brillante, tendencia al granate.</li>
                        <li className="list-group-item"><b>Olfato:</b> Perfume especiado y a frutos rojos.</li>
                        <li className="list-group-item"><b>Gusto:</b>Algo seco, tánico y cuerpo. Agradable y sabroso al paladar.</li>
                    
                    </ul>


                    
                    </Col>
                    <br/>
                    <br/>
                </Row>
            </Container>


            <br></br>
            </div>

            

        )
    }
}

export default ProductosProductos
