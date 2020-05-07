import React, { Component } from 'react';
import aglianico from '../assets/img/brand/aglianico-sannio-dop-munifico-vinicola-del-sannio.png';
import falanghini from '../assets/img/theme/p_falanghinanew.png';
import logo from '../assets/img/brand/prueba-logo.jpg'
import loguito from '../assets/img/brand/loguito.png'

class BannerProductos extends Component {
    render() {
        return (
            <div className="jumbotroni jumbotron-fluid">
                <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="titulo space-top text-white letra "><u>ITALIA</u></h1>

                        </div>
                    <div className="col-6 text-center">
                        <img alt='Aglianico' src={logo} className="img-thumbnail img-fluid tamano-foto-bannerch"/>

                        {/* <img alt='Aglianico' src={aglianico} className="tamano-foto-vino-banner"/> */}
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default BannerProductos
