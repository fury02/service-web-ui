import React from 'react';
import { useState } from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';
import {Actor_Local} from ".././util/agent_local";
import {string} from "yup";
import {Actor_Serv} from "../util/agent";
var ac = new Actor_Serv();
class TIComponent extends React.Component{

    state = {
        service_canister_id: string,
        service_max_buckets: string,
        service_freezing_threshold: string,
        service_compute_allocation: string,
        service_memory_allocation: string,
        service_generated_buckets: string,
        service_using_memory_size: string,
        service_created_tables: string,
    };
    componentDidMount(){
        ac.actor.ui_service_canister_id().then(i => {
            console.log(i);
            this.setState({service_canister_id:i})});
        ac.actor.ui_service_generated_buckets().then(i => {
            console.log(i);
            this.setState({service_generated_buckets:i})});
        ac.actor.ui_service_using_memory_size().then(i => {
            console.log(i);
            this.setState({service_using_memory_size:i})});
        ac.actor.ui_service_created_tables().then(i => {
            console.log(i);
            this.setState({service_created_tables:i})});
        ac.actor.ui_service_max_buckets().then(i => {
            console.log(i);
            this.setState({service_max_buckets:i})});
        ac.actor.ui_service_freezing_threshold().then(i => {
            console.log(i);
            this.setState({service_freezing_threshold:i})});
        ac.actor.ui_service_compute_allocation().then(i => {
            console.log(i);
            this.setState({service_compute_allocation:i})});
        ac.actor.ui_service_memory_allocation().then(i => {
            console.log(i);
            this.setState({service_memory_allocation:i})});
    }
    render() {

        return (
            <Container>
                <Row>
                    <Col><h1></h1></Col>
                </Row>
                <Row>
                    <Col>Project info <h1></h1></Col>
                    <Col>Service info <h1></h1></Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-lg-start" >Difibase is an experimental project. Funded by the Dfinity Foundation.
                            The goal of the project is to create a database (nosql) on the Internet computer (IC) blockchain
                            Below are links to the source code of the project.</h6>
                        <h6></h6>

                        <h6><text>Bitbucket: <a href="https://bitbucket.org/fury02/ic-difi-service/src/main/service-public-version/">click</a></text></h6>
                        <h6><text>Github:<a href="https://github.com/fury02/service-public-version">click</a></text></h6>
                        <h6 className="text-lg-start"><small className="text-muted">Creating an actor to interact with the service. Service ID: {this.state.service_canister_id} and address: "https://boundary.ic0.app". Detailed information on creating an actor can be found in the documentation.</small></h6>
                        <h6 className="text-lg-start">Usage API:</h6>
                        <h6 className="text-lg-start"><small className="text-muted">Creating a table, adding data, adding a column, or updating data.</small></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>replace_value(table: Text, column: Text, id: Text, value: Text)</code></h6>
                        <h6 className="text-lg-start"><small className="text-muted">Search for the value of a specific table cell or output the entire row by ID.</small></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>find_table_cell(table: Text, column: Text, id: Text)</code></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>find_table_value(table: Text, id: Text)</code></h6>
                        <h6 className="text-lg-start"><small className="text-muted">Some API functions support object output (you don't need to deserialize json)</small></h6>
                        <h6 className="text-lg-start"><small className="text-muted">Sample: output of all values from the table. (The array contains json objects)</small></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>get_table_entityes(table: Text): [Text]</code></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>get_table_entityes_json(table: Text): Text</code></h6>
                        <h6 className="text-lg-start"><small className="text-muted">Or get all the keys. (The keys carry a semantic load, there are several implementation options in the plans)</small></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>get_table_keys(table: Text): [Text]</code></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>get_table_keys_json(table: Text): Text</code></h6>
                        <h6 className="text-lg-start"><small className="text-muted">Deletion operations. The ability to delete table columns will be added soon</small></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>delete_table_cell_value(table: Text, column: Text, id: Text): Bool</code></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>delete_table_entity(table: Text, id: Text): Bool</code></h6>
                        <h6><code style={{ color: 'white',  backgroundColor: 'black' }}>delete_table(table: Text): Bool</code></h6>
                        <h6><text className="small">**You can get acquainted with the API in more detail at the link above</text></h6>
                        <h6><text className="small">**The information will be updated</text></h6>
                    </Col>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Parametrs</th>
                                <th>Records</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Service canister id</td>
                                <td>{this.state.service_canister_id}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Service generated disk(buckets)</td>
                                <td>{this.state.service_generated_buckets}</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Using memory (byte)</td>
                                <td>{this.state.service_using_memory_size}</td>

                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Created tables database</td>
                                <td>{this.state.service_created_tables}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Maximum number of disks(buckets)</td>
                                <td>{this.state.service_max_buckets}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Freezing threshold (sec)</td>
                                <td>{this.state.service_freezing_threshold}</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Compute allocation (percent)</td>
                                <td>{this.state.service_compute_allocation}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Memory allocation disk(byte)</td>
                                <td>{this.state.service_memory_allocation}</td>
                            </tr>
                            </tbody>
                        </Table>
                        {/*<h5 className="text-lg-start">Sample:</h5>*/}
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default TIComponent;