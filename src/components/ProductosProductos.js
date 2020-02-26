import React, { Component } from 'react'
import aglianico from '../assets/img/brand/aglianico-sannio-dop-munifico-vinicola-del-sannio.png';
import falanghini from '../assets/img/theme/p_falanghinanew.png';
import {
    Container,
    Row,
    Col
} from "reactstrap";

class ProductosProductos extends Component {
    render() {
        return (
            <div className="bg-white">
                <Container>

                    <br/><br/>
                    <Row>
                        <Col className="vertical-center">
                            <ul class="list-group">
                                
                                <li class="list-group-item"><b>Nombre</b>  Aglianico</li>
                                <li class="list-group-item"><b>Procedencia</b> Uva autóctona de Benevento</li>
                                <li class="list-group-item"><b>Variedad De Uva</b> 100% Aglianico </li>
                                <li class="list-group-item"><b>Grado Alcholico:</b> 12% vol</li>
                                
                            </ul>
                        </Col>
                        <Col>
                        </Col>
                        <Col className="text-center ">
                            
                           <img src={aglianico} alt='Aglianico' className="tamano-foto-vino-banner " />
                        </Col>
                    </Row>
                    <hr/>
                </Container>
                <Container>
                    <br/>
                <Row>
                        <Col className="text-center">
                        
                        <img src={falanghini} alt='Falanghina' className="tamano-foto-vino-banner " />
                        </Col>
                        <Col>
                        </Col>
                        <Col className="vertical-center">
                        <ul class="list-group">
                                <li class="list-group-item"><b>Nombre</b>  Falanghina</li>
                                <li class="list-group-item"><b>Procedencia</b> Uva autóctona de Benevento</li>
                                <li class="list-group-item"><b>Variedad De Uva</b> 100% Falanghina </li>
                                <li class="list-group-item"><b>Grado Alcholico:</b> 12% vol</li>
                                <br/>
                                <br/>
                            </ul>                            
                        </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default ProductosProductos
