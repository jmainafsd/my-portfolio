import React, { useRef } from 'react';
import { ScrollToTop, ScrollToRef } from './Scrolls';
import { Container } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
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
            <div className="sxn sxnE" style={{minHeight: '450px'}} ref={sectionE}> <ContactMe /> </div>

            <Footer />

        </Container>
    );
}

export default Main;