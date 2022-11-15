import React from "react";
import { Navbar, NavbarBrand, Row, Col, Card, } from "reactstrap";

export default function SampleProjects() {

    return(
        <React.Fragment>
            <div className="imgSpan">
                <p>image for SAMPLE PROJECTS</p>
            </div>
            <Navbar sticky='top'>
                <NavbarBrand>
                    <h2 className="col-12"> A Peek into My Projects </h2>
                </NavbarBrand>
            </Navbar>

            <div className="sampleDiv">
                <Row className="sampleRow">
                    <Col className="mobileDisp col-12 col-md-4">
                        <Card
                            className="mobileSample bg-warning"
                        >
                            <img className="sampleItemImg" src="/assets/images/javascript.png"/>
                            <p>This Portfolio Page</p>
                            <p>React</p>
                        </Card>
                    </Col>
                    <Col className="webDisp col-12 col-md-8">
                        <Card hoverable
                            className="webSample bg-warning"
                        >
                            <img className="sampleItemImg" src="/assets/images/javascript.png"/>
                            <p>JavaScript</p>
                        </Card>
                    </Col>
                </Row>
                
                <Col className="col col-12 col-lg-6 sampleCol">
                    <Card className="sampleItem bg-secondary">
                        <img className="sampleItemImg" src="/assets/images/react.png"/>
                        <p style={{color: 'skyblue'}}>React</p>
                    </Card>
                </Col>
                <Col className="col col-12 col-lg-6 sampleCol">
                    <Card className="sampleItem bg-dark">
                        <img className="sampleItemImg" src="/assets/images/react.png"/>
                        <p style={{color: 'skyblue'}}>React Native</p>
                    </Card>
                </Col>
                <Col className="col col-12 col-lg-6 sampleCol">
                    <Card className="sampleItem bg-white">
                        <img className="sampleItemImg" src="/assets/images/nodejs.png"/>
                        <p>Node JS</p>
                    </Card>
                </Col>
            </div>
        </React.Fragment>
    );
}