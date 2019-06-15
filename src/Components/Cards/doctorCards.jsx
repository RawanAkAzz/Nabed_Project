import React, { Component } from "../../../node_modules/react";
import './doctorCards';

class DoctorCards extends Component {
 constructor(props){
  super(props);
   this.status = {
     doctor : [] 
   }
 }

// componentDidMount(){
//   fetch('/')
//      .then(res => res.json())
//      .then(doctor => this.setState({doctor} , () => console.log('doctor' ,
//      doctor )));
// }
 
 render() { 
    return(
     <div>
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <center> 
            <div class="dtc">
            <h1 class="f5 f4-ns mv0">Dr.Khaled</h1>
          </div>   
      </center> 
        </div>
        <center>
        <p class="f6 lh-copy measure mt2 mid-gray">
        Doctor of Dentist </p></center>
      </div>
      <center>
      <button>
      <a
              class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
              href="/"
            >
              Profile
            </a>
      </button></center>
    </article> 
    



    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src="https://debatechamber.com/wp-content/uploads/2017/02/bigstock-Portrait-of-a-friendly-female-26984102-2-238x300.jpg"/>
    <div class="pa2 ph3-ns pb3-ns">
      <div class="dt w-100 mt1">
        <center> 
          <div class="dtc">
          <h1 class="f5 f4-ns mv0">Dr.Sara</h1>
        </div>   
    </center> 
      </div>
      <center>
      <p class="f6 lh-copy measure mt2 mid-gray">
      Doctor of pharmacy      </p></center>
    </div>
    <center>
    <button>
    <a
            class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
            href="/"
          >
            Profile
          </a>
    </button></center>
  </article> 

  <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src="https://purefitness.net.au/wordpress/wp-content/uploads/2016/05/doctor-facing-amera.jpg"/>
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <center> 
            <div class="dtc">
            <h1 class="f5 f4-ns mv0">Dr.Ali</h1>
          </div>   
      </center> 
        </div>
        <center>
        <p class="f6 lh-copy measure mt2 mid-gray">
        Doctor of science
        </p></center>
      </div>
      <center>
      <button>
      <a
              class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
              href="/"
            >
              Profile
            </a>
      </button></center>
    </article> 
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src="https://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg"/>
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <center> 
            <div class="dtc">
            <h1 class="f5 f4-ns mv0">Dr.Amar</h1>
          </div>   
      </center> 
        </div>
        <center>
        <p class="f6 lh-copy measure mt2 mid-gray">
        Doctor of eyes   
        </p></center>
      </div>
      <center>
      <button>
      <a
              class="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
              href="/"
            >
              Profile
            </a>
      </button></center>
    </article> 
</div>

    )
  }
}

 
export default DoctorCards;