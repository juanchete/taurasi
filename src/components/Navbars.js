import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/brand/Menus.png';
// reactstrap components
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

class Navbars extends React.Component {
  render() {
    return (
      <>
      <Navbar
        className="navbar-horizontal navbar-dark morado"
        expand="lg"
      >
        <Container>
          <NavbarBrand  href="/">

          <div class="row justify-content-start">
            
            
            
            <h4 className="text-white letra_titulo">  Grupo Taurasi C.A</h4>
            
            

            
      
            {/* <img src={logo} alt='Aglianico' className="logo_nav" /> */}
            
           
          
          </div>

          </NavbarBrand>
          <button
            aria-controls="navbar-primary"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-primary"
            data-toggle="collapse"
            id="navbar-primary"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-primary">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/" href="/">
                    <img
                      alt="..."
                      className='logo_nav_respon'
                      src={logo}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-primary"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-primary"
                    data-toggle="collapse"
                    id="navbar-primary"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto letra text-white" navbar>
              <NavItem>
                <NavLink href="/" >
                
                  Nosotros <span className=" sr-only">(current)</span>
                  
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/productos">
                
                  Productos
                 
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
              <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    href="/contacto"
                    id="navbar-primary_dropdown_1"
                    
                    role="button"
                  >
                    Contacto
                  </NavLink>
                <DropdownMenu
                  aria-labelledby="navbar-primary_dropdown_1"
                  right
                >
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
        
  </>
    );
  }
}

export default Navbars;