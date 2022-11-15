import React from "react";
import { Navbar, NavbarBrand, Col, Row } from "reactstrap";


export default function Landing() {

    let c = 45;

    function draw(){
        document.documentElement.style.setProperty('--direction', c++ + 'deg');
        setTimeout(function() {
            requestAnimationFrame(draw);
        }, 20);
        
    }

    requestAnimationFrame(draw);


    return(
        <div className="landingOuter">
            <div className="landingInner background">
                    <div className="row p-0 welcome bgMsg">
                        <div className="col-12">
                            <p className="smallText"> Hello, I'm </p>
                            <p> John Maina </p>
                            <p className="smallText"> I'm a </p>
                            <p> Fullstack </p>
                            <p className="smallText"> Web & Mobile </p>
                            <p> Developer</p>
                        </div>
                        <div className="col-3">
                            <p className="frontEndMover smallText">Front End </p>
                            <p className="devMover smallText">Developer </p>
                        </div>
                    </div>
            </div>
            
            <div className="landingInner foreground">
                <div className="row p-0 welcome fgMsg">
                    <div className="col-12">
                        <p className="smallText"> Hello, I'm </p>
                        <p> John Maina </p>
                        <p className="smallText"> I'm a </p>
                        <p> Fullstack </p>
                        <p className="smallText"> Web & Mobile </p>
                        <p> Developer</p>
                    </div>
                    <div className="col-3">
                        <p className="backEndMover smallText">Back End </p>
                        <p className="devMover smallText">Developer </p>
                    </div>
                </div>
            </div>
        </div>
    );
}