import React from "react";
import { Navbar, NavbarBrand, Row, Col, Container } from "reactstrap";

export default function WhatIDo() {

    return(
        <React.Fragment>

            <Navbar sticky='top' style={{backgroundColor: "teal", height: '65px'}} >
                <Container>
                    <NavbarBrand className="bg-danger">
                        <h2 className="col-12"> What I Do </h2>
                    </NavbarBrand>
                </Container>
            </Navbar>
            <div className="backLayer p-0 m-0"></div>
            <div className="frontLayer row">
                <Col className="col-12 col-lg-10 col-xl-8 col-xxl-6 textSpan">

                    <p className="whatIDo">
                        I Architect, Design and Develop Web and Mobile Applications using modern technologies, ingenuity and diligence to deliver phenomenal digital user experiences.
                    </p>

                    <p className="whatIDo">
                        As a Full Stack Developer, I am able to work cross-functionally on the entire "Software Applications Stack" (i.e. Front end / Client side and Back end / Server side).
                    </p>
                </Col>
                {/* <Row>
                    <Col className="col-11 col-sm-10 col-lg-9 col-xl-8 textSpan">
                        <p className="whatIDo">
                            I Architect, Design and Develop Web and Mobile Applications using modern technologies, ingenuity and diligence to deliver phenomenal digital user experiences.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-11 col-sm-10 col-lg-9 col-xl-8 textSpan">
                        <p className="whatIDo">
                            As a Full Stack Developer, I am able to work cross-functionally on the entire "Software Applications Stack" (i.e. Front end / Client side and Back end / Server side).
                        </p>
                    </Col>
                </Row> */}

                
                {/* <div className="col-11 col-sm-10 col-lg-9 col-xl-8 textSpan">
                    <p className="whatIDo">
                        I Architect, Design and Develop Web and Mobile Applications using modern technologies, ingenuity and diligence to deliver phenomenal digital user experiences.
                    </p>
                </div> */}
                {/* <div className="col-11 col-sm-10 col-lg-9 col-xl-8 textSpan">
                    <p className="whatIDo">
                        As a Full Stack Developer, I am able to work cross-functionally on the entire "Software Applications Stack" (i.e. Front end / Client side and Back end / Server side).
                    </p>
                </div> */}
            </div>
        </React.Fragment>
    );
}