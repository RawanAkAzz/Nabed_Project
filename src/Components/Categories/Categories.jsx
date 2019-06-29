import React, { Component } from "react";
import { MDBCard, MDBCardImage, MDBRow } from "mdbreact";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center mt-5 ">
          <MDBRow className="m-4">
            <MDBCard  style={{ width: "22rem" }}>
              <a href="/Sugrery" title="Department of Sugrery">
                <MDBCardImage 
                className="img-fluid br3"
                  src="http://care360clinic.org/wp-content/uploads/2018/04/general-surgery-at-neoalta.jpg"
                  alt="Department of Sugrery"
                  waves
                />  
              </a>
              <p>
                <a
                  className="l-dark "
                  href="Sugrery"
                  title="Department of Sugrery"
                ><h3 className='tc'>Department of Sugrery</h3>
                </a>
              </p>
            </MDBCard>{" "}
          </MDBRow>
          <MDBRow className="m-4">
            <MDBCard style={{ width: "22rem" }}>
              <a href="/Neurology" title="Department of Neurology">
                <MDBCardImage
                className="img-fluid br3"
                  src="https://www.acmh.org/Files/User/bigstock-Neurology-Diagnostics-Hologra-303179911.jpg"
                  alt="Department of Neurology"
                  waves
                />
              </a>
              <p>
                <a
                  className="l-dark"
                  href="/Neurology"
                  title="Department of Neurology"
                >
                <h3>Department of Neurology</h3>
                </a>
              </p>
            </MDBCard>
          </MDBRow>
          <MDBRow className="m-4">
            <MDBCard style={{ width: "22rem" }}>
              <a href="/Dental" title="Dental section">
                <MDBCardImage
                className="img-fluid br3"
                  src="https://content2.jdmagicbox.com/comp/def_content/dentist/default-dentist-3.jpg"
                  alt="Dental section"
                  waves
                />
              </a>

              <p>
                <a className="l-dark" href="/Dental" title="Dental section">
                  {" "}
                  Dental section
                </a>
              </p>
            </MDBCard>
          </MDBRow>
          <MDBRow className="m-4">
            <MDBCard style={{ width: "22rem" }}>
              <a
                href="/HeartSection"
                title="Heart Section
"
              >
                <MDBCardImage
                className="img-fluid"
                  src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png"
                  alt="Heart Section"
                  waves
                />
              </a>
              <p>
                <a className="l-dark" href="/HeartSection" title="HeartSection">
                Children's Ward
                </a>
              </p>
            </MDBCard>
          </MDBRow>{" "}
        </div>
        <div className="m-4 d-flex justify-content-center mt-5">
          <MDBRow className="m-4 ">
            <MDBCard style={{ width: "22rem" }}>
              <a href="/Laboratory" title="Laboratory Department">
                <MDBCardImage
                className="img-fluid"
                  src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png"
                  alt="Laboratory Department"
                  waves
                />
              </a>
              <p className="md-body-1">
                <a
                  className="l-dark"
                  href="/Laboratory"
                  title="Laboratory Department"
                >
                  Laboratory Department
                </a>
              </p>
            </MDBCard>
          </MDBRow>
          <MDBRow className="m-4">
            <MDBCard style={{ width: "22rem" }}>
              <a href="/Ophthalmology">
                <MDBCardImage
                className="img-fluid"
                  src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png"
                  alt="Department of Ophthalmology"
                  waves
                />

                <p>
                  <a
                    className="l-dark"
                    href="/Ophthalmology"
                    title="Department of Ophthalmology"
                  >
                    Department of Ophthalmology
                  </a>
                </p>
              </a>
            </MDBCard>
          </MDBRow>{" "}
          <MDBRow className="m-4">
            <MDBCard style={{ width: "22rem" }}>
              <a href="/GeneralServices" title="GeneralServices">
                <MDBCardImage
                className="img-fluid"
                  src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png"
                  alt="GeneralServices"
                  waves
                />
              </a>
              <p className="md-body-1">
                <a
                  className="l-dark"
                  href="/GeneralServices"
                  title="GeneralServices"
                >
                  GeneralServices
                </a>
              </p>
            </MDBCard>
          </MDBRow>
          <MDBRow className="m-4">
            <MDBCard style={{ width: "22rem" }}>
              <a href="/Healthy" title>
                <MDBCardImage
                className="img-fluid"
                  src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png"
                  alt="Healthy"
                  waves
                />

                <p>
                  <a className="l-dark" href="/Healthy" title="Healthy">
                    Healthy and Safty
                  </a>
                </p>
              </a>
            </MDBCard>
          </MDBRow>
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
