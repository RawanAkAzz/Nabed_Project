import React, { Component } from "react";

class Sugrery extends Component{
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

render(){
    const style = {
     marginTop:"30px",
    marginBottom: "1rem",
    justifyContent: "left",
    padding:"2rem",
    }
    const p = {
      fontFamily:"Trebuchet MS",
      fontSize: "18px",
      border: "5px solid skyblue",
      borderRadius: "17px",
      padding:"2rem"
    }
    return( 
    <div>
              <img
                src="https://www.essrahospital.com/uploads/images/services/services3_54.JPG"
                className="db w-100 br2 br--top"
                alt="Photo menacing."
              />

        <div className="text-justify " style = {style} >
             <div style={p}>

           
               <p>The Department of General Surgery at University of Jordan is a large, expanding department with a diverse staff working in dedicated teams to provide high quality work in an organized, effective and efficient manner through innovation, training, and education. It was established since 1973 and continued since then to provide surgical services to patients and training and teaching for students, residents and fellows.
 
        We provide service training and education in the following subspecialties:
      <ul className="center">
        -              Gastrointestinal and minimally invasive surgery <br></br>
        -              Head and neck, and endocrine surgery <br></br>
        -              Oncology and breast surgery <br></br>
        -              Pediatric surgery <br></br>
        -              Plastic and reconstructive surgery <br></br>
        -              Cardiovascular and thoracic surgery <br></br>
        -              Trauma and surgical intensive care
         </ul>
        Our service is following the most updated and advanced standards of care in all subspecialties. We are committed to provide best patient care as well as achieving the teaching outcomes for residents and students.
        </p>  </div> 
           {this.state.doctors.map(doctor => {
          return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg"
                className="db w-100 br2 br--top"
                alt="Photo menacing."
              />
              <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                  <center>
                    <div className="dtc">
                   
                      <h1 className="f5 f4-ns mv0 ">{doctor.name}</h1> <br></br>
                      <h1 className="f5 f4-ns mv0">{doctor.email}</h1>

                    </div>
                  </center>
                </div>
                <center>
                  <p className="f6 lh-copy measure mt2 mid-gray">
                    {doctor.specialty}{" "}
                  </p>  
                </center>
              </div>
              <center>
                <button>
                  <a
                    className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
                    href="/ProfilePage"
                  >
                    Profile
                  </a>
                </button>
              </center>
            </article>
          );
        })}
      </div>
        </div>

    )
}

}

export default Sugrery;