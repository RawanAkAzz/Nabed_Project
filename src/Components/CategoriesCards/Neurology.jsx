import React , {Component} from "react";
import $ from "jquery";
import  {Modal,Button} from "react-bootstrap"

class Neurology extends Component{
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
              <div className="text-justify align-bottom" style = {style} >
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
           src="https://www.acmh.org/Files/User/bigstock-Neurology-Diagnostics-Hologra-303179911.jpg"
           className="db w-100 br2 br--top"
            alt="Photo menacing."
          />

    <div className="text-justify " style = {style} >
         <div style={p}>

         <p className="text-justify align-bottom">   The OHSU Department of Neurology is one of the nation’s leading neurologic research and training programs and provides the most comprehensive care of neurologic illnesses in the Pacific Northwest.
 We have subspecialty centers that offer specialized care for patients with a range of neurologic diseases including Alzheimer’s disease and related dementias, Parkinson’s disease and other movement disorders, multiple sclerosis, stroke, amyotrophic lateral sclerosis, neuromuscular diseases, epilepsy and brain tumors. These centers provide expert care, conduct research and hold educational programs for patients and physicians throughout the region.
Our department has a robust laboratory research program aimed at understanding the cause and cure of a variety of neurologic diseases. Finally, we have a highly regarded neurology residency program and offer post-doctoral training in multiple subspecialty areas. Our goal is to continue providing state-the-art care for neurologic illnesses today, while conducting research, and training the next generation of neurologists to improve neurologic disease treatments in the future.
 </p></div></div> 
       {this.state.doctors.map((doctor,index) => {
      return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <img
                  src="https://www.acmh.org/Files/User/bigstock-Neurology-Diagnostics-Hologra-303179911.jpg"
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
         )
     }
}
export default Neurology;
