import React, { Component } from "react";
import DoctorCards from "../Cards/doctorCards";
class Dental extends Component {
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
          <div className="text-justify align-bottom" style = {style} >
     <img
            src="http://www.warrencohealth.com/images/dental-fade.png"
            className="db w-100 br2 br--top"
            alt="Photo menacing."
          />

    <div className="text-justify " style = {style} >
         <div style={p}>
 
 <p className="text-justify align-bottom"> The European dental center was established in (2006) under the management of Dr. Mohanned Kiswani and a number of Jordanian dentists and specialists.

That’s why the team of the European center is considered one of the best and distinct teams in the dental field in Jordan.

What makes the European dental center so special: <br></br>
<ul className="center">

1. It is the authorized training center for the German (Orange Dental ) company the first one globally in the early diagnostic  devices of  oral and dental diseases and by that we are considered  one of the first centers in the middle east  who are using the latest  diagnostic tools and devices .

Whichare:

1. The CARIOSCAN device which helps detecting early stages of caries even the types that cannot be detected by X-ray with accuracy of 95%. <br></br>
2. The SMART PAD device that’s used with a sterilizing material for the oral tissues which kill99% of bacteria in 60 seconds. <br></br>
3. The PA-ON device that helps in the early diagnosis of the gum diseases and gingival pockets with accuracy and without pain.   <br></br>

2. The center applies the standards and protocols of the (Anios) French labs for sterilization using the same standards that are applied in the surgery theaters in hospitals. The whole staff is certified from the Anios labs in sterilization.<br></br>

3. The European dental center applies an integrated system  for water  treatment  and purification under the supervision of  the Consultant Water and Environmental Technology  by using multiple stages :
<br></br> <br></br>
1. Water filters to remove sediments and chemicals. <br></br>
2. Ultra violet sterilization unit (Sterilight). <br></br>
3. Reverse osmosis filters (RO Kemflo Reverse Osmosis system). <br></br>
</ul>

For more information about European Dental Center you can contact with us. 
     </p></div></div> 
     <DoctorCards/>
     </div>
     
    );
  }
}
export default Dental;
