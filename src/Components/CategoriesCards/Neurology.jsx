import React , {Component} from "react";

class Neurology extends Component{
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
  
  
  render(){
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
         return(
          <div>
          <img
            src="https://www.essrahospital.com/uploads/images/services/Multi/4IMG_4731%20copy.jpg"
            className="db w-100 br2 br--top"
            alt="Photo menacing."
          />

    <div className="text-justify " style = {style} >
         <div style={p}>

            <div className="text-justify align-bottom font-weight-bold" style = {style} >
          <p> 
  The OHSU Department of Neurology is one of the nation’s leading neurologic research and training programs and provides the most comprehensive care of neurologic illnesses in the Pacific Northwest.
We have subspecialty centers that offer specialized care for patients with a range of neurologic diseases including Alzheimer’s disease and related dementias, Parkinson’s disease and other movement disorders, multiple sclerosis, stroke, amyotrophic lateral sclerosis, neuromuscular diseases, epilepsy and brain tumors. These centers provide expert care, conduct research and hold educational programs for patients and physicians throughout the region.

Our department has a robust laboratory research program aimed at understanding the cause and cure of a variety of neurologic diseases. Finally, we have a highly regarded neurology residency program and offer post-doctoral training in multiple subspecialty areas. Our goal is to continue providing state-the-art care for neurologic illnesses today, while conducting research, and training the next generation of neurologists to improve neurologic disease treatments in the future.
          </p></div> </div>
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
</div>
         )
     }
}
export default Neurology;
