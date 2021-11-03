import React from "react";
import {Navbar} from 'react-bootstrap';
class NBComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={"bottom"}>
                <Navbar.Text></Navbar.Text>
            </Navbar>
            );
    }
}
export default NBComponent;
