import React, { useState, useRef } from 'react';
import { ScrollToTop, ScrollToRef } from './Scrolls';
import Header from './Header';
import Footer from './Footer';
import ProjectA from './Ecommerce';
import ProjectB from './PMS';
import ProjectC from './MPesaTRS';
import ProjectD from './RetailPOS';
import ProjectE from './ProjectE';
import ProjectF from './ProjectF';


const Home = () => {
    const sectionA = useRef(null);
    const sectionB = useRef(null);
    const sectionC = useRef(null);
    const sectionD = useRef(null);
    const sectionE = useRef(null);
    const sectionF = useRef(null);

    return (
        <React.Fragment>
{/* 
            <h1 className="brand-position brand-style"> Software</h1>
                <h1 className="brand-position brand-style"> Developer</h1>
                <h1 className="brand-position brand-style"> Maina</h1> */}
                {/* <h1 className="brand-position brand-style"> John_Maina Fullstack Developer</h1> */}
            <ScrollToTop />
            <section>
                <Header
                    onScrollToRef = {(ref) => ScrollToRef(ref) }
                    sectionA = {sectionA}
                    sectionB = {sectionB}
                    sectionC = {sectionC}
                    sectionD = {sectionD}
                    sectionE = {sectionE}
                    sectionF = {sectionF}
                />
                <div className="imgSpan">

                </div>
            </section>
            <section className="row" ref={sectionA}>
                <ProjectA />
            </section>
            <section className="row" ref={sectionB}>
                <ProjectB />
            </section>
            <section className="row" ref={sectionC}>
                <ProjectC />
            </section>
            <section className="row" ref={sectionD}>
                <ProjectD />
            </section>
            <section className="row" ref={sectionE}>
                <ProjectE />
            </section>
            <section className="row" ref={sectionF}>
                <ProjectF />
            </section>
            <section className="row" ref={sectionF}>
                <Footer />
            </section>
        </React.Fragment>
    );
}

export default Home;