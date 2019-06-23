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
        email: "",
        password: ""
      
    };

  }

  onChangeemail(e) {
   this.setState({
     email:e.target.value
   } ,()=> console.log(this.state) 
 )
  }
  onChangepass(e) {
    this.setState({
      password:e.target.value
    } ,()=> console.log(this.state) 
  )
  }
  onClick(event) {
    event.preventDefault();

     console.log(this.state)
    var that = this;
    $.ajax({
      type: "POST",
      url: "http://localhost:5001/SignIn",
      body: JSON.stringify(that.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
      ,
      success: function(body) {
        alert("the Name is already used");
        // console.log("hide");
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
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeemail.bind(this)}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangepass.bind(this)}
                />

                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.onClick}
                  >
                    {/* <Link to="/ProfilePage" style={{ color: "white" }}>
                      SignIn
                    </Link> */}
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
