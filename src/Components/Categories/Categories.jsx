import React, { Component } from "react";
import { MDBCard, MDBCardImage, MDBRow,MDBCol,MDBCardBody,MDBCardTitle } from "mdbreact";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <section className="text-center my-5">
          <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard  wide ecommerce >
              <a href="/Sugrery" title="Department of Sugrery">
                <MDBCardImage
                cascade 
                  src="http://care360clinic.org/wp-content/uploads/2018/04/general-surgery-at-neoalta.jpg"
                  top
                  alt="Department of Sugrery"
                />  
              </a>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <strong>
                    <a href='/Sugrery'>Department of Sugrery</a>
                  </strong>
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>

            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce >
              <a href="/Neurology" title="Department of Neurology">
                <MDBCardImage
                cascade
                  src="https://www.acmh.org/Files/User/bigstock-Neurology-Diagnostics-Hologra-303179911.jpg"
                  alt="Department of Neurology"
                  top
                />
              </a>
              <MDBCardBody cascade className="text-center">
                <a
                  className="l-dark"
                  href="/Neurology"
                  title="Department of Neurology"
                >
                </a>
                <MDBCardTitle>
                <strong>
                  <a href="/Neurology">Department of Neurology</a>
                </strong>
              </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
      
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <a href="/Dental" title="Dental section">
                <MDBCardImage
                className="img-fluid br3"
                  src="https://content2.jdmagicbox.com/comp/def_content/dentist/default-dentist-3.jpg"
                  top
                  alt="Dental section"
                  cascade
                />
              </a>
              <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
              <strong>
                <a className="l-dark" href="/Dental" title="Dental section">
                  Dental section
                </a>
              </strong>
              </MDBCardTitle>  
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
           
          <MDBCol  lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce >
              <a
                href="/HeartSection"
                title="Heart Section"
              >
                <MDBCardImage
                cascade
                  src="https://www.heartuk.org.uk/images/home/stethoscope-heart.jpg"
                  top
                  alt="Heart Section"
                 
                />
              </a>
              <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
              <strong>
                <a href="/HeartSection" title="HeartSection">
                Children's Ward
                </a>
              </strong>
              </MDBCardTitle> 
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <a href="/Laboratory" title="Laboratory Department">
                <MDBCardImage
                cascade
                  src="https://canada.businesschief.com/public/uploads/large/large_e917f648_ac19_c9a6_7691_180bca9f083b.jpg"
                  alt="Laboratory Department"
                 top
                />
              </a>
              <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
                <strong>
                   <a href="/Laboratory" title="Laboratory Department" >  Laboratory Department </a>
                </strong>
              </MDBCardTitle>
              </MDBCardBody> 
            </MDBCard>
          </MDBCol>
            
       
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <a href="/Ophthalmology">
                <MDBCardImage
                cascade
                top
                  src="https://patientsrising.org/wp-content/uploads/2018/01/ophthalmologist-750xauto@2x.jpg"
                  alt="Department of Ophthalmology"
                 
                />
                </a>
               <MDBCardBody cascade className="text-center">
                 <MDBCardTitle>
                    <strong>
                      <a href="/Ophthalmology" title="Department of Ophthalmology" >
                        Department of Ophthalmology
                      </a>  
                    </strong>
                 </MDBCardTitle>
               </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol  lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <a href="/Healthy" title="Healthy">
                <MDBCardImage
                cascade
                top
                  src="https://blogs.bcm.edu/wp-content/uploads/2016/10/healthy-habits-thumbnail-1.png"
                  alt="Healthy"
                />
              </a>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <strong>
                    <a  href="/Healthy" title="Healthy">
                    Healthy and Safty
                    </a>
                  </strong>
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

export default Categories;
