import React, { Component } from 'react';
import aglianico from '../assets/img/brand/aglianico-sannio-dop-munifico-vinicola-del-sannio.png';
import falanghini from '../assets/img/theme/p_falanghinanew.png';

class BannerProductos extends Component {
    render() {
        return (
            <div className="jumbotroni jumbotron-fluid">
                <div className="container">
                <div className="row">
                    <div className="col-8 align-self-center">
                        <h1 className="titulo text-white letra "><u>ITALIA</u></h1>
                        <h3 className="subtitulo letra text-white">Vinicola Del Sannio</h3>
                        {/* <a className="bg-dark display-4 text-white gordura">Conoce Mas</a> */}
                        </div>
                    <div className="col-4 text-center vertical-center">
                        <img alt='Aglianico' src={falanghini} className="tamano-foto-bannerch"/>
                        <img alt='Aglianico' src={aglianico} className="tamano-foto-vino-banner"/>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default BannerProductos
