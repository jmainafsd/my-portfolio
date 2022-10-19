import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Container, Row, Col } from 'reactstrap';
import { Link  } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Container fluid className="p0m0 py-0 bg-warning">
            <Row className="p0m0">
                <Navbar sticky='top' expand='md' light className="p0m0 sticky-top fixed-top">
                    <NavbarBrand className="p0m0">
                        <Link to=''>
                            <h1 className="p0m0">John M</h1>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="navi p0m0" navbar >
                            <NavItem className="nav-item d-md-inline-block "> <NavLink className="nav-link" to="#">Landing</NavLink> </NavItem>
                            <NavItem className="nav-item d-md-inline-block "> <NavLink className="nav-link" to="#">Products</NavLink> </NavItem>
                            <NavItem className="nav-item d-md-inline-block "> <NavLink className="nav-link" to="#">Products</NavLink> </NavItem>
                            <NavItem className="nav-item d-md-inline-block "> <NavLink className="nav-link" to="#">Products</NavLink> </NavItem>
                            <NavItem className="nav-item d-md-inline-block "> <NavLink className="nav-link" to="#">Products</NavLink> </NavItem>
                            <NavItem className="nav-item d-md-inline-block "> <NavLink className="nav-link" to="#">Products</NavLink> </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>
        </Container>
    );
}

export default Header;