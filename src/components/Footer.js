import React, { Component } from 'react';
import Vinicola from '../assets/img/brand/vinicola-del-sannio.png';
import Gmail from '../assets/img/brand/gmail.png';
import instagram from '../assets/img/brand/instagram.png';
import {

    Container,
    Row,
    Col
  } from "reactstrap";

class Footer extends Component {
    render() {
        return (
            // <div className='bg-dark'>
            //     <br />
            //     <br />
            //     <h1 className='display-1 text-center text-white'><u>Contactanos</u></h1>
            //     <Container>
            //         <Row>
            //             <Col>
            //             <br/>
            //                 <span className="text-white display-3">Grupo Taurasi Compañia C.A</span>
            //                 <p className="text-white">contacto@taurasi.com</p>
            //             <br/>
            //             </Col>
                        
            //             <Col className=" text-center">
            //             <br/>
            //                 <img src={Gmail} className="gmail"></img>
            //             <br/>
            //             </Col>
            //         </Row>
            //     </Container>
            // </div>

// {/* <div class="d-flex flex-column fondoFooter">
//   <div id="page-content">
//     <div class="container text-center">
//       <div class="row justify-content-center">
//         <div class="col-md-7">
//           <h1 class="font-weight-light mt-4 text-white">Contactenos</h1>
//                        <Col className=" text-center">
//                          <br/>
//                              <img src={Gmail} className="gmail"></img>
//                          <br/>
//                         </Col>
//           <br/>
//         </div>
//       </div>
//     </div>
//   </div> */}
  <div>
  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
        <p>Grupo Taurasi Compañia C.A</p>
        <Row>
        <Col md="8" xs="12">
        <p class="text-left"> <small>  Copyright &copy; Your Website</small></p>
        <p class="text-left"> <small>  contacto@taurasi.com</small></p>
        </Col>      
        <Col md="4" xs="6" className="text-right">
         
        {/* <img src={Gmail} className="gmail"></img> */}
        <img src={instagram} className="gmail"></img>
        </Col>
        </Row>
    </div>
  </footer>
</div>

        )
    }
}

export default Footer


