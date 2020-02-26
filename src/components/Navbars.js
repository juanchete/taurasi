import React from "react";
import { Link } from "react-router-dom";
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
        {/* Navbar primary */}
        <Navbar
          className="navbar-horizontal navbar-dark bg-default"
          expand="lg"
        >
          <Container>
            <NavbarBrand  href="#pablo" onClick={e => e.preventDefault()}>
              <h1 className="text-white letra">Taurasi</h1> 
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
                    <Link to="/" className="navegar">
                      <img
                        alt="..."
                        src={require("../assets/img/brand/blue.png")}
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
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink className="letra text-white"  onClick={e => e.preventDefault()}>
                    <Link to="/" className="navegar">
                     Nosotros <span className="lead sr-only lead">(current)</span>
                     </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="letra text-white" onClick={e => e.preventDefault()}>
                    <Link to="/productos" className="navegar">
                    Productos
                    </Link>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  {/* <NavLink
                    className="letra text-white"
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbar-primary_dropdown_1"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    Contacto
                  </NavLink> */}
                  <DropdownMenu
                    aria-labelledby="navbar-primary_dropdown_1"
                    right
                  >
                    <DropdownItem
                      href="#who"
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