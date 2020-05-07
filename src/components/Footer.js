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

  <div>
  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div className="container text-center">
        <p>Grupo Taurasi Compañia C.A</p>
        <Row>
        <Col md="6" xs="6">
        <p className="text-left"> <small>  grupotaurasi@gmail.com</small></p>
       
        </Col>      
        <Col md="6" xs="6" className="text-right">
         
        
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


