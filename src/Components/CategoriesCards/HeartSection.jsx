import React , {Component} from "react";
import $ from "jquery";
import  {Modal,Button} from "react-bootstrap"

class Heart extends Component{
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
      data: {cat:"Children"},
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
                  
                    <div>
      <Modal
        show = {this.state.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          MOre Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <h3>Doctor name :</h3>
          <h4>{this.state.doctor.name}</h4>
          <br/>
          <h3>Doctor email :</h3>
          <h4>
           {this.state.doctor.email}
           </h4>
          <br/>
          <h3>Phone Number :</h3>
          <h4>{this.state.doctor.phoneNumber}</h4> 

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
          
                 <img
                        src="https://www.lutheranchildrenshosp.com/images/child_in_bed.jpg"
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
            {this.state.doctors.map((doctor,index) => {
          return (
            
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img
                src="data:image/jpeg;base64,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"
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
    

        
export default Heart ;