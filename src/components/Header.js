import React, { useState, useRef } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Container, Row, Col } from 'reactstrap';
import '../scroller.css';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { onScrollToRef, sectionA, sectionB, sectionC, sectionD, sectionE, sectionF } = props;
    console.log(`this is header`)

    const handleClick = (ref) => {
        onScrollToRef(ref);
        setIsOpen(!isOpen);
    }

    return(
        <React.Fragment>
            <Navbar sticky='top' expand='none' light className="bg-secondary">
                <NavbarBrand className="col-8 col-md-6 bg-info">
                    <h1>John Maina</h1>
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse 
                    isOpen={isOpen} navbar className="col-4 col-md-6 mt-3 bg-danger" 
                    style={{flexDirection: 'row', justifyContent: 'right'}}
                >
                    <Nav className="navi p0m0 " navbar >
                        <NavItem className="nav-item bg-info">
                            <NavLink className="nav-link" to="/projectA" onClick={() => handleClick(sectionA)}>Project A</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/projectB" onClick={() => handleClick(sectionB)}>Project B</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/projectC" onClick={() => handleClick(sectionC)}>Project C</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/projectD" onClick={() => handleClick(sectionD)}>Project D</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/projectE" onClick={() => handleClick(sectionE)}>Project E</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/projectF" onClick={() => handleClick(sectionF)}>Project F</NavLink>
                        </NavItem>
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