import React, { useState } from "react";
import { Navbar, NavbarBrand, Row, Col, Card, Button, Label, CardHeader} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';




export default function ContactMeLinkedIn() {
    return (
        <React.Fragment>
            <Row className="downwardSkewRow text-warning">
                <Col className="rightSkewed"><h1>Conta</h1></Col>
                <Col className="leftSkewed"><h1>ct Me</h1></Col>
            </Row>
            <Row className="formRow">
            <Col className="formCol col-sm-11 col-md-10 col-lg-9 col-xl-8">
                <span className="d-none d-md-block p-md-4" />
                <Card className="my-md-3 my-lg-5 py-5 px-3 bg-dark text-white">
                    <p style={{textAlign: 'center'}}>
                        Please <a target="_blank" style={{fontSize: '20px', textDecoration:'none'}} href="http://www.linkedin.com/in/john-maina-2abab3227">Click Here</a> to contact me via 
                        <a target="_blank" style={{fontSize: '28px', textDecoration:'none'}} href="http://www.linkedin.com/in/john-maina-2abab3227"> LinkedIn </a> 
                    </p>
                </Card>
            </Col>
            </Row>
        </React.Fragment>
    )
}

export function ContactMe() {

    const [formErr, setFormErr] = useState(1);

    // function handleSubmit(values) {
        // postFeedback(values);

            //.firstName, values.lastName, values.phoneNum, values.email, values.agree, values.contactType, values.feedback);
        //postFeedback(values);
        // console.log("The current state is: " + JSON.stringify(values));
        // alert("The current state is: " + JSON.stringify(values));
    // }

    return(
        <React.Fragment>
            <Row className="downwardSkewRow text-warning">
                <Col className="rightSkewed"><h1>Conta</h1></Col>
                <Col className="leftSkewed"><h1>ct Me</h1></Col>
            </Row>

            {/* <div className="contactForm text-warning"> */}
                
                <Row className="formRow">
                   
                    <Col className="formCol col-sm-11 col-md-10 col-lg-9 col-xl-8">
                        <span className="d-none d-md-block p-md-4" />
                        <Card className="my-md-3 my-lg-5 py-5 px-3 bg-dark text-white">
                            <Formik
                                initialValues={{ firstname: '', lastname: '', email: '', msg: '' }}

                                validate={values => {
                                    const errors = {};
                                    let errFields = 4;

                                    // firstname validation
                                    if (!values.firstname){
                                        errors.firstname = 'Required';
                                    } else if (values.firstname.length < 2 ) {
                                        errors.firstname = 'Name too short'
                                    } else if (values.firstname.length > 15) {
                                        errors.firstname = 'Name too long'
                                    } else {
                                        errFields--;
                                    }

                                    // lastname validation
                                    if (!values.lastname){
                                        errors.lastname = 'Required';
                                    } else if (values.lastname.length < 2 ) {
                                        errors.lastname = 'Name too short'
                                    } else if (values.lastname.length > 15) {
                                        errors.lastname = 'Name too long'
                                    } else {
                                        errFields--;
                                    }

                                    // email validation
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    } else {
                                        errFields--;
                                    }

                                    // msg validation
                                    if (!values.msg){
                                        errors.msg = 'Required';
                                    } else if (values.msg.length < 30 ) {
                                        errors.msg = 'Message too short'
                                    } else {
                                        errFields--;
                                    }

                                    setFormErr(errFields);
                                    return errors;
                                }}

                                
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Row className="form-group">
                                            <Label htmlFor="name" md={2} className="d-none d-md-block"> Name</Label>
                                            <Col xs={6} md={5}>
                                                <Field
                                                    type="text" 
                                                    name="firstname" 
                                                    placeholder="First name" 
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="firstname" component="div" className="text-info"/>
                                            </Col>
                                            <Col xs={6} md={5}>
                                                <Field
                                                    type="text" 
                                                    name="lastname" 
                                                    placeholder="Last name" 
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="lastname" component="div" className="text-info"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="name" md={2} className="d-none d-md-block"> Email</Label>
                                            <Col md={10}>
                                                <Field 
                                                    type="email" 
                                                    name="email"
                                                    placeholder="Your email" 
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-info"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="msg" md={2} className="d-none d-md-block">Message</Label>
                                            <Col md={10}>
                                                <Field 
                                                    as="textarea" 
                                                    name="msg"
                                                    placeholder="... type your message here" 
                                                    rows="6"
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="msg" component="div" className="text-info"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group flex-1">
                                            <Col md={{size: 10, offset: 2}}>
                                                <Button 
                                                    outline
                                                    type="submit" 
                                                    disabled={isSubmitting} 
                                                    color="warning"
                                                    className={!formErr ? "d-block" : "d-none"}
                                                >
                                                    Send Message
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </Card>
                    </Col>
                </Row>
            {/* </div> */}
        </React.Fragment>
    );
}