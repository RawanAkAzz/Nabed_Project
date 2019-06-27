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
    return ( <MDBContainer className="justify-content-center mt-5">
    <MDBRow>
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="pink-text mb-5">
                <strong>Sign up</strong>
              </h3>
            </div>
            <MDBInput label="Your name" id = "name" group type="text"   onChange={this.onChange}
validate />
            <MDBInput id = "email" label="Your email" group type="text" onChange={this.onChange}
validate />
             <MDBInput
              label="Your password"
              group
              type="password"
              validate
              containerClass="mb-0"
              id="password"
              onChange={this.onChange}
            />
         <MDBInput label="Your phoneNumber" id="phoneNumber" group type="number"  onChange={this.onChange}
          onChange={this.onChange}
          />
         <MDBInput label="Your Location" id = "location"  group type="text"   onChange={this.onChange}
/>
         <MDBInput label="Your description" id = "description"  group type="text"   onChange={this.onChange}
/>
         <textarea id="questionnaire" id="name" cols="30" rows="10"></textarea>


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
              <MDBCol md="6" className="text-center">
                <button
                  type="button"
                  className="btn btn-pink btn-block btn-rounded z-depth-1"
                  onClick={(event) => this.onClick(event)}
             >
                  <a href="/signIn" className="blue-text ml-1">
                    Sign up
                  </a>
                </button>
              </MDBCol>
              <MDBCol md="6">
                <p className="font-small grey-text d-flex justify-content-end">
                  Have an account?
                  <a href="/signIn" className="blue-text ml-1">
                    Log in
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          <div className="footer pt-3 mdb-color lighten-3">
            <MDBRow className="d-flex justify-content-center">
              <p className="font-small white-text mb-2 pt-3">
                or Sign up with:
              </p>
            </MDBRow>
            <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
              <a
                href="https://www.facebook.com/"
                className="fa-lg p-2 m-2 fb-ic"
              >
                <MDBIcon
                  icon="facebook-f"
                  fab
                  size="lg"
                  className="white-text"
                >
                  {" "}
                </MDBIcon>
              </a>
              <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                <MDBIcon className="fab fa-twitter white-text fa-lg">
                  {" "}
                </MDBIcon>
              </a>
              <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                <MDBIcon className="fab fa-google-plus-g white-text fa-lg">
                  {" "}
                </MDBIcon>
              </a>
            </MDBRow>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>) 
  }
}

export default Register;