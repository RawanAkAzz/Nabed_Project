import React , {Component} from "react";
import $ from "jquery";
import  {Modal,Button} from "react-bootstrap";
class Laboratory extends Component{
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
      data: {cat:"Laboratory"},
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

     <p className="text-justify align-bottom">  
        
        <ol>
        Reception:  <br></br>
        Blood, pathology, body fluids and other samples are collected or received, registered and entered as per test into the computer system. Worksheets are made out for these designated tests then distributed with their respective samples to the section of concern.
         <br></br> <br></br>
        Chemistry: 
        This department is equipped with fully automated analyzers: Electrolytes are analyzed using on selective electrode machines. Manual methodology for rare, backup and specialized determination using the best available quality controlled kits. A special biochemistry area is responsible for protein electrophoresis glycosylated hemoglobin and various miscellaneous, specialized tests.
        <br></br>  <br></br>
        Hematology: 
        Fully automated 5-part differential analyzers are used. A wide range of hemostasis studies, using fully automated analyzer is available for the diagnosis and follow -up of patients with bleeding and thrombotic disorders in addition to an automated blood banking system. The department also performs hemoglobin analysis for the diagnosis of hemoglobinopathies (Hgb-electrophoresis). Rheumatology (IF), tissue typing, bone marrow, etc., are done manually.
        <br></br> <br></br>
        Endocrinology and Serology department: 
        A wide test menu for tumor markers, hormones and vitamins is provided by the immunoassay area using.
        Automated systems.
        electrophoresis - gel full option machines.
        ELISA and IF technology for infectious diseases in addition to highly equipped serology
        section. 
        <br></br> <br></br>
        
        Microbiology: 
        For isolation, identification and sensitivity determination of microorganisms in all body fluids and tissues. Blood cultures and bone marrow are done on automated machines (quick scan).
        <br></br> <br></br>
         
        Body fluids department: 
        The analysis of body fluids e.g. Urine, Stools, Semen, CSF, Lavages, Washes, Brushes, etc. are carried out.
         
        Quality Control Section: 
        To Follow up quality control (QC) according to ISO 9002 organized by the hospital 
         
        The QC samples are purchased from well known sources for each piece of equipment or test to be performed. It is used each morning, at the beginning of every shift and when required .
        Additionally, samples are split and determinants of both splits are compared.
        Random samples are chosen by the director and repeated measurements of the determinant are carried out the next day when the results are compared.
        Genetics and molecular biology: Highly equipped department with all needed facilities.
         
        Histopathology: 
        Director: Dr. Hassan Annab, Consultant Pathologist Diplomat, American Board of Pathology (AP/CP). For histological examination of tissues, frozen section consultations cytology, fine needle aspiration using routine techniques, special, immunological and immunohistochemistry procedures.
        </ol>
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
export default Laboratory ;