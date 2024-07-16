import React, { Component } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Modal,
} from "react-bootstrap";
import { Headlines } from "../service/NewsService";

class InsertStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      place: "",
      modelVisible: false,
    };
  }
  HandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  HandleForm = async (event) => {
    event.preventDefault();
    const response = await Headlines({
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      place: this.state.place,
    });
    console.log(response);
    this.setState({ modelVisible: true });
  };

  handleClose = () => {
    this.setState({ modelVisible: false });
    window.location.reload();
  };

  render() {
    return (
      <>
        <Container className="mt-5">
          <Alert className="text-center">Insert data</Alert>
          <Form onSubmit={this.HandleForm}>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={this.HandleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Enter Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    onChange={this.HandleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Enter Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.HandleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Place</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Place"
                    name="place"
                    onChange={this.HandleChange}
                  />
                </Form.Group>
              </Col>
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <Modal show={this.state.modelVisible} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, Student Inserted!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default InsertStudent;

// import React from 'react';
// import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { Headlines } from '../service/NewsService'

// const InsertStudent = () => {

//     const [registration, setRegistration] = React.useState({
//         name: '',
//         phone: '',
//         email: '',
//         place: '',
//     })

//     let HandleChange = (event) => {

//         setRegistration({

//            [ event.target.name]: event.target.value}

//         )
//     }
//     let HandleForm = async (e) => {
//         e.preventDefault()
//         let response = await Headlines(registration)
//         console.log(response);
//     }

//     return (
//         <Container className='mt-5'>
//             <Alert className='text-center'>Insert data</Alert>
//             <Form onSubmit={HandleForm} >
//                 <Row>
//                     <Col lg={6}>
//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Enter Your Name</Form.Label>
//                             <Form.Control type="text" placeholder="Name" name='name' onChange={HandleChange} />
//                         </Form.Group>
//                     </Col>
//                     <Col lg={6}>
//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Enter Phone Number</Form.Label>
//                             <Form.Control type="number" placeholder="Phone" name='phone' onChange={HandleChange} />
//                         </Form.Group>
//                     </Col>
//                     <Col lg={6}>
//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Enter Email ID</Form.Label>
//                             <Form.Control type="email" placeholder="Email" name='email' onChange={HandleChange} />
//                         </Form.Group>
//                     </Col>
//                     <Col lg={6}>
//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Place</Form.Label>
//                             <Form.Control type="text" placeholder="Place" name='place' onChange={HandleChange} />
//                         </Form.Group>
//                     </Col>
//                     <Col className='text-center'>
//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Col>
//                 </Row>
//             </Form>
//         </Container>
//     );
// }

// export default InsertStudent;
