import React, { useState } from "react";
import { Navbar, NavbarBrand, Card, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Label, Col, Row, ModalFooter, Container  } from "reactstrap";
// import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import TechModal from "./TechModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Technologies() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    

    return(
        <React.Fragment>
            <div className="techSpan">
                <Row className="p-0 m-0">
                    <Col className="left"></Col>
                    <Col className="right"></Col>
                </Row>
            </div>
            <Row className="p-0 techRow">
                    
                <Navbar sticky="top" className=" techNavbar">
                    <Container className="p-0">
                        <div className='diamond diamondOne'><p className="p1">My Tech</p></div>
                        {/* <div className='diamond diamondTwo'><p className="p2">My Gear</p></div> */}
                    </Container>
                </Navbar>

                <Col className="col-12">
                    <Row className="techDiv">
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-warning">
                                <img className="techItemImg" src="/assets/images/javascript.png"/>
                                <p>JavaScript</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-secondary">
                                <img className="techItemImg" src="/assets/images/react.png"/>
                                <p style={{color: 'skyblue'}}>React</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-dark">
                                <img className="techItemImg" src="/assets/images/react.png"/>
                                <p style={{color: 'skyblue'}}>React Native</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-white">
                                <img className="techItemImg" src="/assets/images/nodejs.png"/>
                                <p>Node JS</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-white">
                                <img className="techItemImg" src="/assets/images/express.png"/>
                                <p>Express Js</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-white">
                                <img className="techItemImg" src="/assets/images/Mongodb.png"/>
                                <p>Databases</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem">
                                <img className="techItemImg" src="/assets/images/json160.gif"/>
                                <p>JSON</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem">
                                <img className="techItemImg" src="/assets/images/redux.png"/>
                                <p>Redux</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-white">
                                <img className="techItemImg" src="/assets/images/hooks.png"/>
                                <p className="pt-3">React Hooks</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-warning">
                                <img className="techItemImg" src="/assets/images/htmlIcon.png"/>
                                <p>Html</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-warning">
                                {/* <i class="fa fa-brands fa-css3 fa-lg" /> */}
                                <img className="techItemImg" src="/assets/images/css3.png"/>
                                <p>CSS</p>
                            </Card>
                        </Col>
                        <Col className="col col-6 col-md-4 col-lg-3 techCol">
                            <Card className="techItem bg-warning">
                                <img className="techItemImg" src="/assets/images/bootstrap.png"/>
                                <p>Bootstrap</p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-5 pb-5 techBtnRow">
                <Col className="centerJustified ">
                    <Button outline size={'lg'} id="viewMoreBtn" className="fa fa-eye fa-lg px-5" onClick={toggleModal}><span> View More </span></Button>
                </Col>
            </Row>


            <Modal 
                className="m-0"
                contentClassName="customModal"
                isOpen={isModalOpen}   
                toggle={toggleModal}
                animationType={'zoom'}
                backdrop={"static"}
            >
                <ModalHeader style={{justifyContent: 'center'}}>
                    <h2 className="modalTitle">Technologies I Utilize</h2>
                </ModalHeader>
                <ModalBody>
                    <TechModal />
                </ModalBody>
                <ModalFooter className="pt-3 pb-5">
                    <Button color='warning' size={'lg'} style={{fontWeight:'bold'}} block 
                        onClick={toggleModal}> Close
                    </Button>
                </ModalFooter>
            </Modal>

        </React.Fragment>
    );
}