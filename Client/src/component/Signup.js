import React from "react";
import { InsertUsers } from "../service/UserService.js";
import "./Sighup.css";
import { useNavigate } from "react-router-dom";
import { Row, Form, Button, Col, Container } from "react-bootstrap";
export default function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const HandleForm = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      let response = await InsertUsers(data);
      if (response.status === 200) {
        alert("Data Inserted");
        //  window.location.reload()
        response = await response.data;
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", JSON.stringify(response.auth));
        navigate("/");
      } else {
        alert("something is wrong");
      }
    } else {
      alert("Please Fill Data");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Form
          action="/headlines"
          onSubmit={HandleForm}
          className="bg-light p-5"
        >
          <Row className="mt-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={HandleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  name="phone"
                  onChange={HandleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={HandleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={HandleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

// import React, { Component } from 'react'
// import { InsertUsers } from '../Service/UserService'

// export default class SignUp extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             email: "",
//             phone: "",
//             password: "",
//         }
//     }

//     HandleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     HandleForm = async (e) => {
//         e.preventDefault()
//         const response = await InsertUsers(this.state)
//         console.log(response);
//     }
//     render() {
//         return (
//             <div>
//                 <form action="" onSubmit={this.HandleForm}>
//                     <div className="name" id="name">Enter Your Name  </div>
//                     <input type="text" placeholder="Enter Name" name="name" className="name" onChange={this.HandleChange} />
//                     <div className="email" id="email">Enter Your Email </div>
//                     <input type="text" className="email" placeholder="Enter Email" name="email" onChange={this.HandleChange} />
//                     <div className="phone" id="phone">Enter Your Phone</div>
//                     <input type="text" className="phone" placeholder="Enter Phone" name="phone" onChange={this.HandleChange} />
//                     <div className="password" id="password">Enter Password  </div>
//                     <input type="text" className="password" placeholder="Enter Password" name="password " onChange={this.HandleChange} /><br />
//                     <input type="submit" value={'Submit'} className='submit' />
//                 </form>
//             </div>
//         )
//     }
// }
