import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import { Container } from 'reactstrap';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

// import {
//     useLocation,
//     useNavigate,
//     useParams
//   } from "react-router-dom";
  
//   function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//         <Component
//           {...props}
//           router={{ location, navigate, params }}
//         />
//       );
//     }
  
//     return ComponentWithRouterProp;
//   }




    
const Home = () => {
    return;
        // <MathGame 

        // />
    
}
const MathGameProject = () => {
    return;
        // <MathGame 

        // />
    
}
const MemorizerProject = () => {
    return;
        // <Memorizer 

        // />
    
}
const MpesaProject = () => {
    return;
        // <Mpesa 

        // />
    
}
let MyRoute = () => {
    return <p>Hello!</p>;
  };





const Main = () => {
    return(
        <Router>
            <Container fluid className='bg-info m-0 p-0'>
                <Header />
                <Routes>
                    <Route path="/" element={<h1>Landing Page</h1>} />
                    <Route path="page1" element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                    <Route path="page3" element={<Page3 />} />
                </Routes>

                <div className='row'>
                    <div className='col'>
                        <p>this is sth</p>
                    </div>
                    <div className='col'>
                        <p>this is sth</p>
                    </div>
                </div>
                <Landing />
                <Footer />
            </Container>
        </Router>
    )
}

export default Main;








//   const Main = () => {
//     return(
//         <React.Fragment>
//             {/* <Header />
//             <p>what is happeninng?</p>
//             <Landing /> */}
//             <Routes>
//                   <Route path="/my-route" element={<MyRoute />} />

//                 {/* <Route path='/home' element={<Home /> } />
//                 <Route path = '/mathgame' element={<MathGameProject /> } />
//                 <Route path='/memorizer' element={<MemorizerProject /> } />
//                 <Route path='/mpesa' element={<MpesaProject /> } />
//                 <Route
//                     path="*"
//                     element={
//                     <div>
//                         <h2>404 Page not found etc</h2>
//                     </div>
//                     }
//                 /> */}
//             </Routes>
//                 {/* <Navigate to='Home' /> */}
//             {/* <Footer /> */}
//         </React.Fragment>
//     );
// }

// export default withRouter(Main);
// // export default Main;