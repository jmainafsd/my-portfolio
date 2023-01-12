import React, { useState, useRef, useEffect } from 'react';
import { ScrollToTop, ScrollToRef } from './Scrolls';
import { Container } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import ProjectEcomm from './ProjectEcomm';
import ProjectPMS from './ProjectPMS';
import ProjectMPesaTRS from './ProjectMPesaTRS';
import ProjectRetailPOS from './ProjectRetailPOS';
import Landing from './Landing';
import SampleProjects from './SampleProjects';
import WhatIDo from './WhatIDo';
import Technologies from './Technologies';
import ContactMe from './ContactMe';

const Main = () => {
    const sectionA = useRef(null);
    const sectionB = useRef(null);
    const sectionC = useRef(null);
    const sectionD = useRef(null);
    const sectionE = useRef(null);


    return (
        <Container fluid>
            
            {/* <div className='circle bg-info'>
                <h2 className="brand-position brand-style"> John Maina</h2>
                <h2 className="sub-brand-position sub-brand-style"> Fullstack Developer</h2>
            </div> */}
            {/* <HomeCarousel /> */}

            <Header
                onScrollToRef = {(ref) => ScrollToRef(ref) }
                sectionA = {sectionA}
                sectionB = {sectionB}
                sectionC = {sectionC}
                sectionD = {sectionD}
                sectionE = {sectionE}
            />

            <ScrollToTop />

            <div className="sxn sxnA" ref={sectionA}> <Landing /> </div>
            <div className="sxn sxnB" ref={sectionB}> <WhatIDo /> </div>
            <div className="sxn sxnC" ref={sectionC}> <Technologies /> </div>
            <div className="sxn sxnD" ref={sectionD}> <SampleProjects /> </div>
            <div className="sxn sxnE" ref={sectionE}> <ContactMe /> </div>
            
            {/* <div className="section" ref={sectionD}> <ProjectEcomm /> </div>
            <div className="section" ref={sectionE}> <ProjectMPesaTRS /> </div>
            <div className="section" ref={sectionF}> <ProjectPMS /> </div>
            <div className="section" ref={sectionG}> <ProjectRetailPOS /> </div>
            <div className="section" ref={sectionH}> <ProjectEcomm /> </div> */}

            <Footer />

        </Container>
    );
}

export default Main;