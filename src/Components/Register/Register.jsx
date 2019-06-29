import React, { Component } from "react";
import $ from "jquery";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from "mdbreact";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: {
        name: "",
       email: "", 
       password: "",
        phoneNumber: "",
        description: "",
        Location: ""
        
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange (e) {
    var states = this.state.states;
    var name = e.target.id;
    var value = e.target.value;
    // var name = this.state.states;
    // var value = e.target.value;
       //console.log(name , value)
   states[name] = value;
    
      this.setState({ states: states });
   console.log(this.state.states);
  }

  onClick (e) {
   

    console.log(this.state.states)
    var that = this;
    $.ajax({
      type: "POST",
      url: "http://localhost:5001/Register",
      data: that.state.states,
      success: function(data) {
        alert("the Name is used, please use another name");
        console.log("hide");
      },
      error: function(request, status, error) {}
    });
  }

  
  render() {
    return ( <MDBContainer className="d-flex justify-content-center pv7">
    <MDBRow>
      <MDBCol>
        <MDBCard>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="pink-text mb-5">
                <strong>Sign up</strong>
              </h3>
            </div>
            <MDBInput label="Your name" id = "name" group type="text"   onChange={this.onChange} validate />
            <MDBInput id = "email" label="Your email" group type="text" onChange={this.onChange} validate />
             <MDBInput
              label="Your password"
              group
              type="password"
              validate
              containerClass="mb-0"
              id="password"
              onChange={this.onChange}
            />

            {/* <div className="md-form pb-3">
              <div className="form-check my-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck12"
                />
                <label htmlFor="defaultCheck12" className="grey-text">
                  Accept the
                  <a href="#!" className="blue-text">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div> */}
            <MDBRow className="d-flex align-items-center mb-4">
              <MDBCol className="text-center">
                <button
                  type="button"
                  className="btn btn-pink btn-block btn-rounded z-depth-1"
                  onClick={(event) => this.onClick(event)}
             >
                  <a href="/signIn" className="blue-text ml-1">
                    <span style={{color:'white'}}>Sign up</span>
                  </a>
                </button>
              </MDBCol>
              <MDBCol >
                <p >
                  Have an account?
                  <a href="/signIn" className="blue-text ml-2">
                    Log in
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>) 
  }
}

export default Register;