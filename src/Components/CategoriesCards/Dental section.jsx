import React, { Component } from "react";
import $ from "jquery";
import  {Modal,Button} from "react-bootstrap"


import DoctorCards from "../Cards/doctorCards";
class Dental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      show:false,
      doctor:{}
    };
  }
   show(index){
    
    this.setState({
      doctor:this.state.doctors[index],
      show:!this.state.show
    })
  }
  close(){
    
    this.setState({
      
      show:!this.state.show
    })
  }

  componentDidMount() {
    var that = this;
    //is the best place to fetch data
    $.ajax({
      type: "POST",
      url: "http://localhost:5001/Doctors",
      data: {cat:"Neurology"},
      success: function(data) {
        that.setState({
          doctors : data
        })
        console.log(data);
      },
      error: function(request, status, error) {}
    });  
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
          <div className="text-justify align-bottom" style = {style} >
             <Modal
        show = {this.state.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.state.doctor.name}</h4>
          <p>
           {this.state.doctor.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <img
                  src="https://d2cax41o7ahm5l.cloudfront.net/mi/upload-images/dental-science-minl-2019-86082.jpeg"
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
           {this.state.doctors.map((doctor,index) => {
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
                <button onClick={this.show.bind(this,index)}>
                  
                    Profile
                  
                </button>
              </center>
            </article>
          );
        })}
      </div>
        

  

 
     
    );
  }
}
export default Dental;
