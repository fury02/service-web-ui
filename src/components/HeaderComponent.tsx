import React from "react";
import {Navbar, Nav, NavDropdown, NavLink} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <LinkContainer to="/home">
                        <NavLink><h4 className="yellowText">DIFIBASE</h4></NavLink>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="The future" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <LinkContainer to="/roadmapalpha">
                                    <NavLink><h6 className="blackText">Roadmap</h6></NavLink>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Quick start" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <LinkContainer to="/api">
                                    <NavLink><h6 className="blackText">Base API</h6></NavLink>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <LinkContainer to="/example">
                                    <NavLink><h6 className="blackText">Example</h6></NavLink>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <LinkContainer to="/info">
                                    <NavLink><h6 className="blackText">Information</h6></NavLink>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <LinkContainer to="/integration">
                                    <NavLink><h6 className="blackText">Integration</h6></NavLink>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default HeaderComponent;
