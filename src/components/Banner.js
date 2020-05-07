import React, { Component } from 'react';
import aglianico from '../assets/img/brand/aglianico-sannio-dop-munifico-vinicola-del-sannio.png';
import logo from '../assets/img/brand/prueba-logo.jpg'
import loguito from '../assets/img/brand/loguito.png'
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (



             <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <div className="row">
                     <div className="col-6 ">
                        <h1 className="titulo espaciote text-white letra "><u>ITALIA</u></h1>
                       
                        
                        </div>
                    <div className="col-6 text-center">
                        
                        <img alt='Aglianico' src={logo} className="img-thumbnail img-fluid tamano-foto-banner"/>
                        
                     </div>
                </div>
                 </div>

             </div> 
            
        )
    }
}

export default Banner
