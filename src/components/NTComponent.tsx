import React from "react";
import {Navbar, Nav, NavDropdown, Image} from 'react-bootstrap';
import logo_df from '../logo_df.png'

class NTComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Image src={logo_df}
                       width="30"
                       height="30">
                </Image>
                <Navbar.Brand href="#home">DIFIBASE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Futuro" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#roadmap/alpha">Roadmap</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#features/cloudstorage">Features</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NTComponent;
