import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <React.Fragment>

            {/* <Container fluid>
                <Row className="bg-danger">
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
            </Container> */}
            
            <div className='row py-4 bg-dark text-white' style={{justifyContent: 'center'}}>
                <div className='col col-8'>
                    <p style={{textAlign: 'center'}}>@ 2023 JOHN M. </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;