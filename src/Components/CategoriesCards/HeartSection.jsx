import React, { Component } from "react";

class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [1]
    };
  }
  render() {
    const style = {
      marginTop:"30px",
      marginBottom: "1rem",
      justifyContent: "left",
      padding:"2rem"
}  
const p = {
  fontFamily:"Trebuchet MS",
  fontSize: "18px",
  border: "5px solid skyblue",
  borderRadius: "17px",
  padding:"2rem"
}
    return (
      
      <div className="form-style-7">
     <img
            src="https://www.essrahospital.com/uploads/images/services/Multi/4IMG_5119%20copy.jpg"
            className="db w-100 br2 br--top"
            alt="Photo menacing."
          />

    <div className="text-justify " style = {style} >
         <div style={p}>
           <p>
           The Children’s Ward is a 24 bed inpatient unit that caters for children newborn to 18 years old. In the 2012/2013 financial year we had 7327 children admitted to the ward.

Specialties cared for include orthopaedics; plastic surgery; ear, nose & throat and general paediatric surgery. In the Children’s Ward we often care for children with asthma, other respiratory (breathing) illnesses such as bronchiolitis and gastroenteritis.

Children's Ward also includes the Paediatric Day Stay Unit for children admitted for day surgery, and the Paediatric Observational Unit for children needing observation (but not a longer stay) before being able to go home.

There are daily (or more frequent if required) reviews by medical staff, and onsite paediatric medical staff at all times. Children on the ward can also access allied health services such as dietetics, physiotherapy, speech pathology, and social work as needed.
     <br>
     </br><br></br>
<div>Visiting Hours : </div> 
Visiting hours for family and friends is from 9am – 8pm

Parents are able to be with their child at all times while their child is in the Children’s Ward

Due to limited space we can encourage only one parent to stay overnight

The number of visitors at any one time should be limited to two to three people.
           </p>
</div> </div>
        {this.state.doctors.map(doctor => {
          return (
            <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg"
                class="db w-100 br2 br--top"
                alt="Photo of a kitten looking menacing."
              />
              <div class="pa2 ph3-ns pb3-ns">
                <div class="dt w-100 mt1">
                  <center>
                    <div class="dtc">
                      <button type="button" class="btn btn-primary">
                        Primary
                      </button>
                      <h1 class="f5 f4-ns mv0">{doctor.name}</h1>
                    </div>
                  </center>
                </div>
                <center>
                  <p class="f6 lh-copy measure mt2 mid-gray">
                    {doctor.description}{" "}
                  </p>
                </center>
              </div>
              <center>
                <button>
                  <a
                    class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
                    href="/EditProfile"
                  >
                    Profile
                  </a>
                </button>
              </center>
            </article>
          );
        })}
      </div>
    );
  }
}
export default Heart;
