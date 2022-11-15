import React, { useState, useRef, useEffect } from 'react';
import { ScrollToTop, ScrollToRef } from './Scrolls';
import Header from './Header';
import Footer from './Footer';
import HomeCarousel from './Home';
import ProjectEcomm from './ProjectEcomm';
import ProjectPMS from './ProjectPMS';
import ProjectMPesaTRS from './ProjectMPesaTRS';
import ProjectRetailPOS from './ProjectRetailPOS';
import Landing from './Landing';
import SampleProjects from './SampleProjects';
import WhatIDo from './WhatIDo';
import Technologies from './Technologies';

const Main = () => {
    const sectionA = useRef(null);
    const sectionB = useRef(null);
    const sectionC = useRef(null);
    const sectionD = useRef(null);
    const sectionE = useRef(null);
    const sectionF = useRef(null);
    const sectionG = useRef(null);
    const sectionH = useRef(null);


    return (
        <React.Fragment>
            
            {/* <div className='circle bg-info'>
                <h2 className="brand-position brand-style"> John Maina</h2>
                <h2 className="sub-brand-position sub-brand-style"> Fullstack Developer</h2>
            </div> */}

            <ScrollToTop />
            <Landing />

            <Header
                onScrollToRef = {(ref) => ScrollToRef(ref) }
                sectionA = {sectionA}
                sectionB = {sectionB}
                sectionC = {sectionC}
                sectionD = {sectionD}
                sectionE = {sectionE}
                sectionF = {sectionF}
                sectionG = {sectionG}
                sectionH = {sectionH}
            />

            {/* <HomeCarousel /> */}

            <section ref={sectionA}> <WhatIDo /> </section>
            <section ref={sectionB}> <Technologies /> </section>
            <section ref={sectionC}> <SampleProjects /> </section>
            <section ref={sectionD}> <ProjectEcomm /> </section>
            <section ref={sectionE}> <ProjectMPesaTRS /> </section>
            <section ref={sectionF}> <ProjectPMS /> </section>
            <section ref={sectionG}> <ProjectRetailPOS /> </section>
            <section ref={sectionH}> <ProjectEcomm /> </section>

            <Footer />

        </React.Fragment>
    );
}

export default Main;