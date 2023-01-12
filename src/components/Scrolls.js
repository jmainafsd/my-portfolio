import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import '../scroller.css';


export const ScrollToRef = (ref) => {

    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
    });

    console.log(`scrollToRef called for ${ref}`)
};

// Note: this could be achieced by installing the react-scroll-to-top library.
// npm i react-scroll-to-top
// then import it and use it as usual
// import ScrollToTop from "react-scroll-to-top";


export const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > (760 * 6)) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

   


    return (
        <div className="top-to-btm">
        {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        {" "}
    </div>
    );
};
