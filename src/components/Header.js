import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Button, Row, Col, Card, CardHeader, CardBody, CardText, CardImg,  Media } from 'reactstrap';
// import { VscEyeClosed, SlClose, AiOutlineCloseCircle } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';
import '../scroller.css';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbarToggler, setShowavbarToggler] = useState(false);
    const { onScrollToRef, sectionA, sectionB, sectionC, sectionD, sectionE } = props;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 760) {
                setShowavbarToggler(true);
            } else {
                setShowavbarToggler(false);
            }
        });
    }, []);

    function lockScroll() {
        document.body.classList.toggle('lock-scroll');
    }

    function handleToggle() { 
        setIsOpen(!isOpen)
        lockScroll()
    }

    const handleLinkClick = (ref) => {
        onScrollToRef(ref);
        setIsOpen(!isOpen);
        lockScroll();
    }

    return(
        <React.Fragment>
            <Navbar fixed='top' expand='none' light className="navbar-main" 
                // style={{background: 'transparent'}}
            >
                {/* <NavbarBrand className="col-10 col-lg-9 p0m0">
                    <div >
                        <h1 className="col col-md-6"></h1>
                    </div>
                </NavbarBrand> */}
{/* 
                {showNavbarToggler && (
                    <NavbarToggler
                        className='toggler'
                        onClick={() => handleToggle()} 
                    />
                )} */}

                <Collapse 
                    isOpen={isOpen} navbar className="col-2 col-lg-3 navbarCollapse" >
                    <Nav className="navi" navbar>
                        <GoEyeClosed
                            className="eyeBtn-position eyeBtn-style"
                            onClick={() => handleToggle() }
                        />
                        <div className="row navRow">
                            <div className='navCol col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5'>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/projectB" onClick={() => handleLinkClick(sectionA)}>Who I am</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/projectB" onClick={() => handleLinkClick(sectionB)}>What I Do</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/projectB" onClick={() => handleLinkClick(sectionC)}>Technologies I Utilize</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/projectB" onClick={() => handleLinkClick(sectionD)}>Sample Projects</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/projectB" onClick={() => handleLinkClick(sectionE)}>Contact Me</NavLink>
                                </NavItem>
                            </div>
                            
                            {/* <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionA)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectA</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectA</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionB)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectB</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectB</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionC)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectC</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectC</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionD)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectD</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectD</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionE)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectE</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectE</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionF)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectF</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectF</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionG)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectG</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectG</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='navCol col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Card 
                                    className='navCard'
                                    onClick={() => handleClick(sectionH)}
                                >
                                    <CardHeader className="navCardHdr">
                                        <h3>ProjectH</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText> MyProjectH</CardText>
                                    </CardBody>
                                </Card>
                            </div> */}
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;




// const navLinks = [
//     {navLinkId: 'Home', scrollToId: 'homeSection'},
//     {navLinkId: 'project1', scrollToId: 'p1Section'},
//     {navLinkId: 'project2', scrollToId: 'p2Section'},
//     {navLinkId: 'project3', scrollToId: 'p3Section'},
//     {navLinkId: 'project4', scrollToId: 'p4Section'},
// ]

// const NavLink = ({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {
//     const handleClick = () => {
//         setActiveNavLinkId(navLinkId);
//         document.getElementById(scrollToId).scrollIntoView({
//             behavior: 'smooth', // scroll with an ease-in-out effect
//         });
//     };
    
//     return (
//         <span 
//             id={navLinkId} 
//             className={activeNavLinkId === navLinkId ? 'activeClass' : ''} 
//             onClick={handleClick}
//         >
//             {navLinkId}
//         </span>
//     );
// };

// const Nav = () => {
//     const [activeNavLinkId, setActiveNavLinkId] = useState('');

//     return (
//         <nav>
//             {navLinks.map(
//                 ({navLinkId, scrollToId}) =>
//                 <NavLink 
//                     navLinkId={navLinkId} 
//                     scrollToId={scrollToId} 
//                     activeNavLinkId={activeNavLinkId}
//                     setActiveNavLinkId={setActiveNavLinkId} 
//                 />
//             )}
//         </nav>
//     )
// };