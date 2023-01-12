import React from "react";
import { Navbar, NavbarBrand, Col, Row } from "reactstrap";


export default function Landing() {

    let c = 45;

    function draw(){
        document.documentElement.style.setProperty('--direction', c++ + 'deg');
        setTimeout(function() {
            requestAnimationFrame(draw);
        }, 38);
        
    }

    requestAnimationFrame(draw);


    return(
        <div className="landingOuter">
            <div className="landingInner background">
                <div className="row msgRow bgMsg">
                    <Col className="msgCol">
                        <Row className="intro">
                            <p className="smallText"> Hello, I'm </p>
                            <p> John M.</p>
                            <p className="smallText"> I'm a </p>
                            <p> Fullstack </p>
                            <p className="smallText"> Web & Mobile </p>
                            <p> Developer</p>
                        </Row>
                        <Row className="frontEnd">
                            <Col className="frontEndMover">
                                <p className="smallText movingText"><span>JavaScript</span></p>
                                <p className="smallText movingText"><span>React</span></p>
                                <p className="smallText movingText"><span>React Native</span></p>
                            </Col>
                            <p className="endMover smallText text-white"><span>Front End</span></p>
                        </Row>
                    </Col>
                </div>
            </div>
            
            <div className="landingInner foreground">
                <div className="row msgRow fgMsg">
                    <Col className="msgCol">
                        <Row className="intro">
                            <p className="smallText"> Hello, I'm </p>
                            <p> John M.</p>
                            <p className="smallText"> I'm a </p>
                            <p> Fullstack </p>
                            <p className="smallText"> Web & Mobile </p>
                            <p> Developer</p>
                        </Row>
                        <Row className="backEnd">
                            <Col className="backEndMover">
                                <p className="smallText movingText"><span>Node JS</span></p>
                                <p className="smallText movingText"><span>Express JS</span></p>
                                <p className="smallText movingText"><span>Mongo DB</span></p>
                            </Col>
                            <p className="endMover smallText text-warning"><span>Back End</span> </p>
                        </Row>
                    </Col>
                </div>
            </div>
        </div>
    );
}