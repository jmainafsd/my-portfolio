import React from 'react';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

export default function TechModal() {

    return (
        <React.Fragment>
            <div className="row tableRow pt-0">
                <div className="col-12 col-lg p-0">
                    <Card className="tableDiv me-lg-3">
                        <CardHeader className="tableHead">
                            Languages, Frameworks & Key Libraries
                        </CardHeader>
                        <CardBody>
                            <Table >
                                <thead>
                                    <th>Name</th>
                                    <th>Details</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>HTML</th>
                                        <td>Markup Language</td>
                                    </tr>
                                    <tr>
                                        <th>CSS</th>
                                        <td>Stylesheet Language</td>
                                    </tr>
                                    <tr>
                                        <th>SASS</th>
                                        <td>CSS Preprocessor</td>
                                    </tr>
                                    <tr>
                                        <th>Bootstrap</th>
                                        <td>CSS Framework for Responsive Design</td>
                                    </tr>
                                    <tr>
                                        <th>JavaScript</th>
                                        <td>Scripting Language</td>
                                    </tr>
                                    <tr>
                                        <th>React</th>
                                        <td>JavaScript Library for Building UI</td>
                                    </tr>
                                    <tr>
                                        <th>React Native</th>
                                        <td>Mobile App Framework - Android & iOS</td>
                                    </tr>
                                    <tr>
                                        <th>Reactstrap</th>
                                        <td>React Component Library for Bootstrap</td>
                                    </tr>
                                    <tr>
                                        <th>Express JS</th>
                                        <td>Back-end JS Framework</td>
                                    </tr>
                                    <tr>
                                        <th>Node JS</th>
                                        <td>Back-end JS Runtime Environment</td>
                                    </tr>
                                    <tr>
                                        <th>Redux</th>
                                        <td>Application State Management Library</td>
                                    </tr>
                                    <tr>
                                        <th>React Hooks</th>
                                        <td>Let Functional Components Access State & Lifecycle Methods</td>
                                    </tr>
                                    <tr>
                                        <th>Axios</th>
                                        <td>Fetching Library</td>
                                    </tr>
                                    <tr>
                                        <th>JSON</th>
                                        <td>Data Representation Format</td>
                                    </tr>
                                    <tr>
                                        <th>JWT</th>
                                        <td>JSON-encoded Claim Representation for Transfer</td>
                                    </tr>
                                    <tr>
                                        <th>OAuth</th>
                                        <td>Delegated Authorization Framework for REST/APIs</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-lg p-0 mt-5 mt-lg-0">
                    <Card className="tableDiv ms-lg-3">
                        <CardHeader className="tableHead">
                            General Tools & Toolkits
                        </CardHeader>
                        <CardBody>
                            <Table >
                                <thead>
                                    <th>Name</th>
                                    <th>Details</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Redux Toolkit</th>
                                        <td>A Toolset for Efficient Redux Development</td>
                                    </tr>
                                    <tr>
                                        <th>Webpack</th>
                                        <td>Module Bundler</td>
                                    </tr>
                                    <tr>
                                        <th>Babel</th>
                                        <td>JS Compiler </td>
                                    </tr>
                                    <tr>
                                        <th>Android IDE</th>
                                        <td>Integrated Development Environment for Android Apps</td>
                                    </tr>
                                    <tr>
                                        <th>XCode IDE</th>
                                        <td>Integrated Development Environment for iOS Apps</td>
                                    </tr>
                                    <tr>
                                        <th>Postman</th>
                                        <td>An API Platform for Building and Using RESTful APIs</td>
                                    </tr>
                                    <tr>
                                        <th>Mongo DB</th>
                                        <td>A Cross-platform Document-oriented Database Program</td>
                                    </tr>
                                    <tr>
                                        <th>NPM</th>
                                        <td>Node Package Manager</td>
                                    </tr>
                                    <tr>
                                        <th>Yarn</th>
                                        <td>Program</td>
                                    </tr>
                                    <tr>
                                        <th>Expo</th>
                                        <td>Program</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row tableRow pt-5">
                <div className="col">
                    <Card className="tableDiv strip">
                        <CardHeader className="tableHead stripHead" >
                            Other Libraries
                        </CardHeader>
                        
                        <CardBody className="p-0 pt-2">
                            <div className="row tableRow p-0" >
                                <div className="col col-12 col-lg-6 col-xl inner pe-lg-3 pe-xl-4 mt-4 mt-lg-0">
                                    <Card className="tableDiv">
                                        <CardHeader className="tableHead">
                                            React Libraries
                                        </CardHeader>
                                        <CardBody className="p-0">
                                            <Table className="row p-0">
                                                <tbody className="col twoCols">
                                                    <tr><th> Create React App </th></tr>
                                                    <tr><th> Material UI </th></tr>
                                                    <tr><th> React-Bootstrap </th></tr>
                                                    <tr><th> React Router </th></tr>
                                                    <tr><th> React Query </th></tr>
                                                    <tr><th> React Navigation </th></tr>
                                                </tbody>
                                                <tbody className="col twoCols">
                                                    <tr><th> React Popper </th></tr>
                                                    <tr><th> R. Transition Grp </th></tr>
                                                    <tr><th> React Scripts </th></tr>
                                                    <tr><th> Formik </th></tr>
                                                    <tr><th> User Event </th></tr>
                                                    <tr><th> Jest Dom </th></tr>
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col col-12 col-lg-6 col-xl inner ps-lg-3 px-xl-2 mt-5 mt-lg-0">
                                    <Card className="tableDiv">
                                        <CardHeader className="tableHead">
                                            React Native Libraries
                                        </CardHeader>
                                        <CardBody className="p-0">
                                            <Table className="row p-0">
                                                <tbody className="col twoCols">
                                                    <tr><th> Async Storage </th></tr>
                                                    <tr><th> Date Picker </th></tr>
                                                    <tr><th> Masked View </th></tr>
                                                    <tr><th> Animatable </th></tr>
                                                    <tr><th> Reanimated </th></tr>
                                                    <tr><th> Elements </th></tr>
                                                    <tr><th> Gesture Handler </th></tr>
                                                    <tr><th> Safe Area Context </th></tr>
                                                </tbody>
                                                <tbody className="col twoCols">
                                                    <tr><th> Screens </th></tr>
                                                    <tr><th> Swipable </th></tr>
                                                    <tr><th> Swipe List View </th></tr>
                                                    <tr><th> Tab View </th></tr>
                                                    <tr><th> Vector Icons </th></tr>
                                                    <tr><th> Paper </th></tr>
                                                    <tr><th> Web </th></tr>
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col col-lg-12  col-xl inner ms-xl-4 mt-5 mt-xl-0">
                                    <div className="row shortRow " style={{height: '100%', padding: 0}}>
                                        <div className="col p-0 pb-3">
                                            <Card className="tableDiv" style={{height: 'auto'}}>
                                                <CardHeader className="tableHead">
                                                    Redux Libraries
                                                </CardHeader>
                                                <CardBody className="p-0">
                                                    <Table className="row p-0">
                                                        <tbody className="col twoCols">
                                                            <tr><th> Redux Persist </th></tr>
                                                            <tr><th> Redux Saga </th></tr>
                                                            <tr><th> Redux Offline </th></tr>
                                                        </tbody>
                                                        <tbody className="col twoCols">
                                                            <tr><th> Redux Logger </th></tr>
                                                            <tr><th> Redux Thunk </th></tr>
                                                            <tr><th> Redux Form </th></tr>
                                                        </tbody>
                                                    </Table>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <div className="col p-0 pt-3 mt-3 mt-xl-0">
                                            <Card className="tableDiv" style={{height: '100%', justifyContent: 'flex-end'}}>
                                                <CardHeader className="tableHead">
                                                    React Navigation Libraries
                                                </CardHeader>
                                                <CardBody className="p-0">
                                                    <Table className="row p-0">
                                                        <tbody className="col twoCols">
                                                            <tr><th> Drawer Navigation </th></tr>
                                                            <tr><th> Bottom Tabs Navigation </th></tr>
                                                            <tr><th> Top Tabs Navigation </th></tr>
                                                        </tbody>
                                                        <tbody className="col twoCols">
                                                            <tr><th> Native Navigation </th></tr>
                                                            <tr><th> Stack Navigation </th></tr>
                                                        </tbody>
                                                    </Table>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
}