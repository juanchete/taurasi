import React, { Component } from 'react';
import Banner from './Banner';
import QuienesSomos from './QuienesSomos';
import ProductosHome from './ProductosHome';
import Footer from './Footer';

 class Home extends Component {
    render() {
        return (
            <div >

               {/* <Header/> */}

                <Banner/>
                <QuienesSomos/>
                <ProductosHome/>
                <Footer/>
                {/* <AdminFooter/> */}
            </div>
        )
    }
}

export default Home
