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
            
                <div className='bg-secondary'>
                {/* <h1 className="display-2 text-center" >Quienes Somos</h1> */}
                <Container>
                    <Row>
                        <Col className="text-center vertical-center">
                            <span className="">loressiahdajsldjkasdiosajdioasjdioasjdoiad
                            asdjdjaosidjasoidjsiaodjasdjasoidjsaid
                            jdisajdosajdoiasjdioasjdoiasjdiosadjasdji
                            oaidjaosdijsaoidjasiodjaiojd</span>
                        </Col>
                        <br/>
                        <Col className="vertical-center">
                            <img src={logo} alt='Aglianico' className="tamano-foto-vino-banner " />
                        </Col>
                    </Row>
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

export default Descripcion
