import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
      password:""
    };
    this.onChange = this.onChange.bind(this);
   
  }

  componentDidMount() {
    console.log("looooooog",this.props.history)
    
  }
  onChange(e) {
      this.setState({[e.target.id]:e.target.value});
    
  }
 

  onClick= (event)=> {
    var that = this
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "http://localhost:5001/SignIn",
      data: this.state,
      success: function(data) {
        console.log(data)
      console.log("Prooops",that.props.history)
// localStorage.setItem('storeObj', JSON.stringify(data));
that.props.history.push("/", { response: data })

      },
      error: function(request, status, error) {
        console.log(error)
        alert("wrong user")
      }
    });
   
};

  
  render() {
    return (
      <MDBContainer className="d-flex justify-content-center pv7">
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
                 onChange={this.onChange}
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
                  onChange={this.onChange}
                />

                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.onClick.bind(this)}
                 
                    // onSubmit={this.onSubmit.bind(this)}>
                 >
                      SignIn
                    
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
export default withRouter(SignIn);
