import React, { Component } from 'react';
import BannerProductos from './BannerProductos';
import Descripcion from './Descripcion';
import ProductosProductos from './ProductosProductos';
import Footer from './Footer';

export default class Productos extends Component {
    render() {
        return (
            <div>
                <BannerProductos/>
                <Descripcion/>
                <br/>
                <ProductosProductos/>
                <Footer/> 
            </div>
        )
    }
}
