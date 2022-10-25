import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <React.Fragment>
            
            <Container fluid>
                <Row className="bg-success">
                    <Col xs="3">Column with .col-3 Size</Col>
                    <Col xs="auto">.Column with col-auto Size</Col>
                    <Col xs="3">Column with .col-3 Size</Col>
                </Row>
                <Row className="bg-secondary">
                    <Col xs="6">Column with .col-6 Size</Col>
                    <Col xs="6">Column with .col-6 Size</Col>
                </Row>
                <Row className="bg-success">
                    <Col xs="6" sm="4">Column with .col-6 .col-sm-4 Size</Col>
                    <Col xs="6" sm="4">Column with .col-6 .col-sm-4 Size</Col>
                    <Col sm="4"> Column with .col-sm-4 Size</Col>
                </Row>
            </Container>

            <Container fluid>
                <Row className="bg-danger">
                {/* <Row className='bg-danger' style={{margin: 10}}> */}
                    <Col className='bg-primary'>
                        This is Container 1 in Footer
                    </Col>
                    <Col className='col-6'>
                        <p>This is Container 1 in Footer </p>
                    </Col>
                    <Col className='col-3 bg-info'>
                        <p>This is Container 1 in Footer </p>
                    </Col>
                </Row>
            </Container>
            
            <Container fluid>
                <div className='row'>
                    <div className='col'>
                        <p>This is the Footer of my portfolio</p>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Footer;