import React from "react";
import { Row} from "reactstrap";

export default function Banner() {

    return(
            <Row className="diamondRow">
                <div className='diamond top'><p>HTML</p></div>
                <div className='diamond top'><p>CSS</p></div>
                <div className='diamond top'><p>Bootstrap</p></div>
                <div className='diamond top'><p>Javascript</p></div>
                <div className='diamond top'><p>React</p></div>
                <div className='diamond top'><p>React Native</p></div>
                <div className='diamond top'><p>Reactstrap</p></div>
                <div className='diamond top'><p>Node JS</p></div>
                <div className='diamond top'><p>Express JS</p></div>
                <div className='diamond top'><p>Mongo DB</p></div>

                <div className='diamond'><p>Redux</p></div>
                <div className='diamond'><p>Redux Toolkit</p></div>
                <div className='diamond'><p>Redux Persist</p></div>
                <div className='diamond'><p>Redux Saga</p></div>
                <div className='diamond'><p>Redux Offline</p></div>
                <div className='diamond'><p>Redux Logger</p></div>
                <div className='diamond'><p>Redux Thunk</p></div>
                <div className='diamond'><p>Redux Form</p></div>
                <div className='diamond'><p>Formik</p></div>
                <div className='diamond'><p>Async Storage</p></div>

                <div className='diamond'><p>Axios</p></div>
                <div className='diamond'><p>Fetch</p></div>
                <div className='diamond'><p>React Hooks</p></div>
                <div className='diamond'><p>JSON</p></div>
                <div className='diamond'><p>SASS</p></div>
                <div className='diamond'><p>JWT</p></div>
                <div className='diamond'><p>OAuth</p></div>
                <div className='diamond'><p>Sessions</p></div>
                <div className='diamond'><p>Postman</p></div>
                <div className='diamond'><p>Babel</p></div>

                <div className='diamond'><p>Webpack</p></div>
                <div className='diamond'><p>Uglify JS</p></div>
                <div className='diamond'><p>Usemin CLI</p></div>
                <div className='diamond'><p>Imagemin CLI</p></div>
                <div className='diamond'><p>Rimraf</p></div>
                <div className='diamond'><p>Copyfiles</p></div>
                <div className='diamond'><p>Android IDE</p></div>
                <div className='diamond'><p>XCode IDE</p></div>
                <div className='diamond'><p>User Event</p></div>
                <div className='diamond'><p>Jest Dom</p></div>

                <div className='diamond'><p>NPM</p></div>
                <div className='diamond'><p>Yarn</p></div>
                <div className='diamond'><p>Expo</p></div>
                <div className='diamond'><p>Create React App</p></div>
                <div className='diamond'><p>React Bootstrap</p></div>
                <div className='diamond'><p>React Router</p></div>
                <div className='diamond'><p>React Query</p></div>
                <div className='diamond'><p>React Navigation</p></div>
                <div className='diamond'><p>React Popper</p></div>
                <div className='diamond'><p>React Scripts</p></div>

                <div className='diamond'><p>Date Picker</p></div>
                <div className='diamond'><p>Material UI</p></div>
                <div className='diamond'><p>Masked View</p></div>
                <div className='diamond'><p>Animatable</p></div>
                <div className='diamond'><p>Reanimated</p></div>
                <div className='diamond'><p>Elements</p></div>
                <div className='diamond'><p>React Transition</p></div>
                <div className='diamond'><p>Gesture Handler</p></div>
                <div className='diamond'><p>Safe Area Context</p></div>
                <div className='diamond'><p>Screens</p></div>

                <div className='diamond bottom'><p>Swipable</p></div>
                <div className='diamond bottom'><p>Swipe List View</p></div>
                <div className='diamond bottom'><p>Tab View</p></div>
                <div className='diamond bottom'><p>Vector Icons</p></div>
                <div className='diamond bottom'><p>Paper</p></div>
                <div className='diamond bottom'><p>Web</p></div>
                <div className='diamond bottom'><p>Drawer Navigation</p></div>
                <div className='diamond bottom'><p>Tabs Navigation</p></div>
                <div className='diamond bottom'><p>Stack Navigation</p></div>
                <div className='diamond bottom'><p>Native Navigation</p></div>
            </Row>
    );
}



// // bannerCode bannerCode bannerCode bannerCode bannerCode bannerCode bannerCode bannerCode
// .diamondRow {
//     // max-width: 1400px;
//     margin: 0 ;
//     padding: 0 36px;
//     position: relative;
//     min-height: 100vh;
//     background: #000;
//     // opacity: 0.25;
// }
// .diamond {
//     position: relative;
//     height: 115px;
//     width: 115px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//     margin: -5px 5px;
//     // margin: -35px 0;
//     p {
//         transform: rotateX(45deg) rotateZ(-45deg);
//         color: teal;
//         padding: 0;
//         margin: 0;
//     }
//     .rotation2 {
//         transform: rotateX(90deg) rotateZ(45deg);
//     }
//   }
//   .top{ margin-top: 15px; }
//   .bottom{ margin-bottom: 15px; }

//   .diamond:before {
//     position: absolute;
//     content: '';
//     top: 0px;
//     left: 0px;
//     height: 100%;
//     width: 100%;
//     transform: rotateX(45deg) rotateZ(45deg);
//     box-shadow: 0px 0px 12px gray;
//   }
//   .diamond:after {
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     content: '';
//     height: calc(100% - 22px);  /* -22px is 2 * 10px gap on either side - 2px border on either side */
//     width: calc(100% - 22px);  /* -22px is 2 * 10px gap on either side - 2px border on either side */
//     border: 1px solid rgba(153, 205, 50, 0.432);
//     transform: rotateX(45deg) rotateZ(45deg);
//   }