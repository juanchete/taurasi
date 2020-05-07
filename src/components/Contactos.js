import React, { Component } from 'react'
import Footer from './Footer';

class Contactos extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <br></br>
                <h1 className='letra text-dark'> Contactos</h1>
                <hr></hr>
            <div className="row">
                
                <div className="col">
                
                <h3 className='letra text-dark'>info@grupotaurasi.com</h3>
                <h5 className='letra text-dark'>+584122672660</h5>
                <h5 className='letra text-dark'>+584245406201</h5>
                <br></br>
                <hr></hr>
                </div>
                

            </div>
            
            </div>
            <Footer/>
            </div>
            
        )
    }
}

export default Contactos
