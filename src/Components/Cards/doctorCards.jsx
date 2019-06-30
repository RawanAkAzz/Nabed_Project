import React, { Component } from "../../../node_modules/react";
import "./doctorCards";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBBtn } from "mdbreact";



class DoctorCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [{
      name:"Dr.Khalid",
      email  : "khaledahmad@life.org"
      },{
       name:"Dr.Ali",
       email : "ali.ammmar@life.org"
      }]
    };
  }
  componentDidMount() {
    //is the best place to fetch data
    fetch("http://localhost:5001/Doctors")
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }));
      
    }
  render() {
    return (
      

      <div className="center ">
        {this.state.doctors.map(doctor => {
          return (
            <section className="text-center m-5">
            <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                src="https://image.shutterstock.com/image-vector/logo-health-care-phonendoscope-260nw-585581933.jpg"
                waves 
                 className="img-fluid"
                alt="Photo menacing."
              />
              <MDBCardBody>
              <MDBCardTitle>
        
                   
                      <h1 className="f5 f4-ns mv0 ">{doctor.name}</h1> <br></br>
                      <h1 className="f5 f4-ns mv0">{doctor.email}</h1>

            
                <center>
                  <p className="f6 lh-copy measure mt2 mid-gray">
                    {doctor.specialty}{" "}
                  </p>
                </center>
              
              <center></center>
              </MDBCardTitle>
              <MDBBtn>
                <a
                  className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
                    href="/EditProfile"
                  > Profile</a>
              </MDBBtn>
              </MDBCardBody> 
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </section>
          );
        })}
      </div> 
     
    );
  }
}

export default DoctorCards;
