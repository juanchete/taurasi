import React, { Component } from 'react'
import logo from '../assets/img/brand/logo.jpeg';
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

class QuienesSomos extends Component {
    render() {
        return (
            
                <div className='bg-secondary' id="who">
                {/* <h1 className="display-2 text-center" >Quienes Somos</h1> */}
                <Container>

                <h1 className="letra titulo text-dark text-center" >¿Quienes Somos? </h1>
                    <Row>
                    <br></br>
                        <Col className="text-center vertical-center">


                            <p className="letra text-dark">Grupo Taurasi Compañía C.A es una empresa constituída, dedicada a la
                             importación y distribución de bebidas alcohólicas y alimentos. Nuestro objetivo es el de 
                             brindar productos únicos y distintivos por su gran calidad al exigente mercado venezolano
                             , a través del esfuerzo, la honestidad, la responsabilidad y el compromiso que asumimos con cada
                              una de las marcas que comercializamos.</p>
                        </Col>
                    
                        <br/>
                    
                    </Row>
                    <br></br>
                    <hr className='style18'></hr>
                </Container>




                {/* <div className="container">
                    <div className="row ">
                        <div className="col d-flex justify-content-center">
                            <span className="texto text-center">
                                Somos una impotadora de vinos asociada con
                                Vinicola Del Sannio
                        </span>
                        </div>
                        <div className="col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt='Aglianico' className="tamano-foto-vino-banner" />
                        </div>
                    </div>
                </div> */}
                </div>
            
        )
    }
}

export default QuienesSomos
