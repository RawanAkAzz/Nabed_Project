import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";

import $ from "jquery";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: {
        email: "",
        password: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    var states = this.state.states;
    var email = e.target.id;
    var value = e.target.value;
    //    console.log(email)
    if ((states[email] = value)) {
      this.setState({ states: states });
      console.log(this.state.states);
    } else {
      alert("rawan");
    }
  }
  onClick(event) {
    event.preventDefault();

    console.log(this.state.states);
    var that = this;
    $.ajax({
      type: "POST",
      url: "http://localhost:5001/SignIn",
      data: that.state.states,
      success: function(response) {
        if (response === "200") {
          window.location.replace("/SignIn");
        }
        console.log("hide");
      },
      error: function(request, status, error) {}
    });
  }

  render() {
    return (
      <MDBContainer className="d-flex justify-content-center mt-5">
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center ">
                  <h3 className="dark-grey-text mb-6">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  id="email"
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  id="password"
                  onChange={this.onChange}
                />

                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.onClick}
                  >
                    <Link to="/doctorCards" style={{ color: "white" }}>
                      SignIn
                    </Link>
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="blue-text text-center"
                    />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="/Register" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default SignIn;
