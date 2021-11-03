import React from "react";
import {Navbar, Image,} from 'react-bootstrap';
import logo_df from '../logo_df.png'

class BottomComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={"bottom"}>
                <Image src={logo_df}
                       width="35"
                       height="35">
                </Image>
                <Navbar.Text>Code licensed: Apache License v2.0 2021.</Navbar.Text>
            </Navbar>
            );
    }
}
export default BottomComponent;
