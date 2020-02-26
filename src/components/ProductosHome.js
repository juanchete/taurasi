import React, { Component } from 'react'
import Vinicola from '../assets/img/brand/vinicola-del-sannio.png';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Container,
    Row,
    Col
} from "reactstrap";


class ProductosHome extends Component {
    render() {
        return (
            // <div className='bg-light'>
            //         <br/>
            //         <br/>
            //         <h1 className='display-1 text-center text-dark'><u>Productos</u></h1>
            //         <Container>
            //         <Row>
            //             <Col className="text-center bg-white">
            //             <img src={Vinicola} alt='Aglianico' className="tamano-foto-vinicola" />
            //             </Col>
            //             <Col className="text-center bg-dark">
            //             <button type="button" class="btn btn-dark margen-conoce-mas">Conoce Mas</button>
            //             </Col>
            //         </Row>
            //     </Container>
            // </div>
            <div className='bg-white'>
                <br />
                <br />
                <h1 className='display-1 text-center text-black letra'><u>Productos</u></h1>
                <br/>
                <br/>
                <Container>
                    <Row className=''> 

                    <Col></Col>
                        <Col className=''>
                            <>
                                <Card style={{ width: "18rem"  }}>
                                    <CardImg
                                        alt="..."
                                        src={require("../assets/img/brand/aglianico-sannio-dop-munifico-vinicola-del-sannio.png")}
                                        top
                                        
                                    />
                                    <CardBody>
                                        <CardTitle className="text-center letra">Aglianico</CardTitle>
                                            <CardText>
                                            {/* Fino vino tinto de la linea Penghe */}
                                            </CardText>
                                        {/* <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            className="align-self-center letra"
                                        >
                                            Go somewhere
                                        </Button> */}
                                    </CardBody>
                                </Card>
                            </>
                        </Col>
                        <Col></Col>


                        <Col className=" ">
                            <>
                                <Card style={{ width: "18rem" }}>
                                    <CardImg
                                        alt="..."
                                        src={require("../assets/img/theme/p_falanghinanew.png")}
                                        top
                                        className="cartas"
                                    />
                                    <CardBody>
                                        <CardTitle className="text-center letra"> Falanghina </CardTitle>
                                        <CardText>
                                            {/* Fino vino blanco de la linea Penghe */}
                                        </CardText>
                                        {/* <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            className="text-center letra"
                                        >
                                            Go somewhere
                                        </Button> */}
                                    </CardBody>
                                </Card>
                            </>
                        </Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <div className="container text-center">
                    <Button  >
                        <Link to="/productos">
                                Descubre!!
                        </Link>
                        </Button>
                    </div>
                    <br/>
                    <br/>

                </Container>
            </div>
        )
    }
}

export default ProductosHome
