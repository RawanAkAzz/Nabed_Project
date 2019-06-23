import React, { Component } from "react";

class Sugrery extends Component{
render(){
    const style = {
     marginTop:"370px",
    marginBottom: "5rem",
    justifyContent: "left"
    }
    return(
        <div className="text-justify align-bottom" style = {style} >
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
        </p>
        </div>

    )
}

}

export default Sugrery;