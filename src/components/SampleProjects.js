import React from "react";
import { Navbar, NavbarBrand, Row, Col, Card, Container } from "reactstrap";

export default function SampleProjects() {

    return(
        <React.Fragment>
            <Row className="sampleSpan p-4"> </Row>
            <Navbar sticky='top' className="sampleNavbar">
                <Container>
                    <NavbarBrand>
                        <h2 className="col-12 text-white"> A Peek into My Projects </h2>
                    </NavbarBrand>
                </Container>
            </Navbar>

            <div className="sampleDiv">

{/* Portfolio */}
                <Row className="sampleRow">
                    <h4>Digital Portfolio</h4>

                    <Col className="col-12 col-lg-7 order-lg-last">
                        <div className="imgDiv bg-danger" >
                            <img className="sampleImg " src="/assets/images/samples/portfolioTrio.jpeg" alt=""/>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5">
                        <div className="textDiv">
                            <p>
                                This is obviously the ditigal portfolio you are scrolling through right now. 
                            </p>
                            <p>
                                This web application is built using <span className="text-warning">React </span> JavaScript Library, and it's fully responsive across Mobile and Web by employing <span className="text-warning">Reactstrap</span>.
                            </p>
                            <p>
                                Tools and libraries used include:
                            </p>
                            <img className="sampleImg " src="/assets/images/portfolio.png" 
                                alt="React, React Hooks, Reactstrap, Bootstrap, Formik, Font Awesome"
                            />
                        </div>
                    </Col>
                </Row>
                                
{/* Mpesa */}
                <Row className="sampleRow">
                    <hr />
                    <h4>PesaLog <small><i> (an offline-first app)</i></small></h4>

                    <Col className="col-12 col-lg-7 order-lg-last">
                        <div className="imgDiv bg-danger" >
                            <img className="sampleImg " src="/assets/images/samples/mpesaSample.jpeg" alt=""/>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5">
                        <div className="textDiv">
                            <p>
                                This is an Offline-First transactions recording system for tracking deposits, withdrawals and cash balances for smooth management of pesa business.
                            </p>
                            <p>
                                This system is designed with areas that have limited, poor and/or fructuating internet connectivity in mind.
                            </p>
                            <p>
                                It's built using <span className="text-primary">React Native</span> Mobile App Framework and runs on both Android and iOS. 
                            </p>
                            <p>
                                Tools and libraries used include:
                            </p>
                            <img className="sampleImg " src="/assets/images/pesaLog.png" 
                                alt="React Native, Redux Toolkit, Redux Persist, Redux Saga, Async Storage, React Navigation, Animatable, Gesture Handlers, Babel, Axios, Swipable"
                            />
                        </div>
                    </Col>
                </Row>
                
{/* POS */}
                <Row className="sampleRow">
                    <hr />
                    <h4>Retail POS System</h4>

                    <Col className="col-12 col-lg-7 order-lg-last">
                        <div className="imgDiv bg-danger" >
                            <img className="sampleImg " src="/assets/images/samples/retailPOS.jpeg" alt=""/>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5">
                        <div className="textDiv">
                            <p>
                                This is an Offline-First Point-Of-Sale System for managing various operations of a retail business including purchases, sales, inventory, customers, venders, deals, and promotions among others.
                            </p>
                            <p>
                                Like my PesaLog app above, the Retail POS system is designed with areas that have limited, poor and/or fructuating internet connectivity in mind.
                            </p>
                            <p>
                                It's built using <span className="text-primary">React Native</span> Mobile App Framework and likewise, it runs on both Android and iOS. 
                            </p>
                            <p>
                                Tools and libraries used include:
                            </p>
                            <img className="sampleImg " src="/assets/images/POSsys.png" 
                                alt="React Native, Redux Toolkit, Redux Persist, Redux Saga, Async Storage, React Navigation, Animatable, Gesture Handlers, Babel, Axios, Swipable"
                            />
                        </div>
                    </Col>
                </Row>
                
{/* PMS */}
                <Row className="sampleRow">
                    <hr />
                    <h4>Personal Manager</h4>

                    <Col className="col-12 col-lg-7 order-lg-last">
                        <div className="imgDiv bg-danger" >
                            <img className="sampleImg " src="/assets/images/samples/pmsA.jpeg" alt=""/>
                        </div>
                        <div className="imgDiv bg-danger" >
                            <img className="sampleImg " src="/assets/images/samples/pmsB.jpeg" alt=""/>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5">
                        <div className="textDiv">
                            <p>
                                This is a Personal Management System for keeping track of individual components of various facets of a user's life, for instance work, finances, personal development, family, leisure & recreation among others.
                            </p>
                            <p>
                                It's built using <span className="text-primary">React Native</span> Mobile App Framework and like my other React Native apps, it runs on both Android and iOS devices. 
                            </p>
                            <p>
                                Tools and libraries used include:
                            </p>
                            <img className="sampleImg" style={{width: '70%'}} src="/assets/images/PMS.png" 
                                alt="React Native, React Redux, Redux Logger, Redux Thunk, Swipable, React Navigation, Animatable, Gesture Handlers, Babel, date-fns, datetimePicker"
                            />
                        </div>
                    </Col>
                </Row>
 
{/* Ecomm */}
                <Row className="sampleRow">
                    <hr />
                    <h4>eCommerce Site</h4>
                    
                    <Col className="col-12 col-lg-7 order-lg-last">
                        <div className="imgDiv bg-danger" >
                            <img className="sampleImg " src="/assets/images/samples/eCommReact.png" alt=""/>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5">
                        <div className="textDiv">
                            <p>
                                This is a fully responsive e-commerce website. 
                            </p>
                            <p>
                                Built using both <span className="text-warning">Vanilla JavaScript</span> and  <span className="text-warning">React JS</span>, and <span className="text-warning"> Bootstrap </span> for responsiveness.
                            </p>
                            <p>
                                Tools and libraries used include:
                            </p>
                            <img className="sampleImg" style={{width: '80%'}}  src="/assets/images/Ecomm.png" 
                                alt="Vanilla JavaScript, React, Reactstrap, Bootstrap, React-Router-Dom, React Popper"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}