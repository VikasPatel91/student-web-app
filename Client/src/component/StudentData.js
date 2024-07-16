import React, { Component } from "react";
import { Container, Table, Alert, Button } from "react-bootstrap";
import { AllNews, DeleteByID } from "../service/NewsService.js";

export default class StudentData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      toBeRemoved: "",
    };
  }
  async componentDidMount() {
    let response = await AllNews();
    //console.log(response.data);

    this.setState({
      data: response.data,
    });
  }
  deleteStudent = async () => {
    let response = await DeleteByID(this.state.toBeRemoved);
    window.location.reload();
    //console.log(this.state.toBeRemoved);
    console.log(response);
  };

  render() {
    return (
      <>
        <Container className=" mt-4">
          <Alert className="text-center">All Student Data</Alert>
        </Container>

        <Container className="mt-5">
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Place</th>
                <th>Options</th>
              </tr>
            </thead>
            {this.state.data.map((s, key) => {
              return (
                <tbody key={key}>
                  <tr>
                    <td>{s.name}</td>
                    <td>{s.phone}</td>
                    <td>{s.email}</td>
                    <td>{s.place}</td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => {
                          this.setState({ toBeRemoved: s._id });
                          this.deleteStudent();
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Container>
      </>
    );
  }
}
