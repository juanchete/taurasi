import React, { Component } from 'react'
import logo from '../assets/img/brand/vinicola-del-sannio.png'
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

class Descripcion extends Component {
    render() {
        return (
            
                <div className='bg-secondary' id="who">
                {/* // <Container>
                // <h1 className="letra titulo text-dark text-center" >Quienes Son? </h1>
                //     <Row>
                //         <br></br>
                //         <Col className="text-center vertical-center">
                //             <p className="text-dark letra">Bodega productora por excelencia de vinos únicos y exclusivos del sur de Italia.</p>
                //         </Col>
                //         <br/>
                //     </Row>
                // </Container> */}


                <Container>
                <br></br>
                {/* <h1 className="letra titulo text-dark text-center" >¿Quienes Son? </h1> */}
                <hr className='style18'></hr>
                    <Row>
                    <br></br>
                    
                        <Col className="text-center vertical-center">


                            <p className="letra text-dark">Nuestros vinos, la tierra del sannio es por excelencia excelencia, una de las áreas más fascinantes del panorama vinícola campano en donde se cultiva el 70% de la producción sannio de OP (origen protegida).
<br></br><br></br>Trabajo y pasión, la Vinícola Del sannio nace en 1960 del proyecto admirable y apasionante del fundador Pasquale Pengue.</p>
                        </Col>
                    
                        <br/>
                    
                    </Row>
                    <br></br>
                    <hr className='style18'></hr>
                </Container>


                </div>
            
        )
    }
}

export default Descripcion
