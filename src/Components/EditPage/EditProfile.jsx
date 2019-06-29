import React, { Component } from "../../../node_modules/react";
import "../../Components/Cards/doctorCards";
import { MDBContainer } from 'mdbreact';
import ls from 'local-storage'
import $ from "jquery";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Ahmad",
        email: "",
        phoneNumber: "",
        specialty:"",              
        Location:"",
        DepartName:"",
         url:""
    }
  }
  componentDidMount() {
    //is the best place to fetch data
    // var name = this.state.name
    // var that = this
    // fetch(`http://localhost:5001/EditProfile/${name}`,{
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   }
    // })
    // .then((data) => (data = data.json()))
    // .then((data) => {
    //   console.log("DAAAATA",data)
    //   that.setState({data});
    // }).then(()=>{
    //   console.log(that.state)
    // })
    // .catch((err) => {
    //   console.log({ err: 'error' }, err);
    // });

  const obj = localStorage.getItem("storeObj")

   this.setState({url:obj.url,
    email:obj.email,
    phoneNumber:obj.phoneNumber,
    specialty:obj.specialty

    })
  }
    onClick(event) {
      event.preventDefault();
  
      // console.log(this.state)
      // var that = this;
      // $.ajax({
      //   type: "Post",
      //   url: "http://localhost:5001/EditProfile",
      //   data: that.state,
      //   success: function(data) {
      //     alert("Welcome to your profile");
      //     console.log("hide");
      //   },
      //   error: function(request, status, error) {}
      // });
    }
  render() {
    return (
      // <div className="form-style-7">
     
          
      //       <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      //         <img
      //           src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s810/doctor.jpg"
      //           className="db w-100 br2 br--top"
      //           alt="Photo menacing."
      //         />
      //         <div className="pa2 ph3-ns pb3-ns">
      //           <div className="dt w-100 mt1">
      //             <center>
      //               <div className="dtc">
                   
      //                 <h1 className="f5 f4-ns mv0 ">name</h1> <br></br>
      //                 <h1 className="f5 f4-ns mv0"></h1>

      //               </div>
      //             </center>
      //           </div>
      //           <center>
      //             <p className="f6 lh-copy measure mt2 mid-gray">
                 
      //             </p>
      //           </center>
      //         </div>
      //         <center>
      //           <button>
      //             <a
      //               className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
      //               href="/ProfilePage"
      //             >
      //               Profile
      //             </a>
      //           </button>
      //         </center>
      //       </article>
      //     );
      
      // </div>
         
   <div>    <input type="file" name="image" onChange={this.handleChange} />
   <br />
   <br />
   {/* <button onClick={this.handleUpload.bind(this)}>Upload</button> */}
   <img
     src={this.state.url || "https://via.placeholder.com/150"}
     alt="uploaded image"
     height="150"
     width="200"
   />
<div className="form-row mb-3 col-auto mb-6 "> 
<h1>{this.state.email}</h1>
 
 </div>
<div className="input-group">
<div className="input-group-prepend">
 <span className="input-group-text" id="basic-addon">
   <i className="fa fa-user prefix"></i>
 </span>
</div>
<MDBContainer label="text" className="form-control" placeholder="Your name" aria-label="email" aria-describedby="basic-addon" >{this.state.name}</MDBContainer>
</div>
<div className="input-group">
<div className="input-group-prepend">
 {/* <span className="input-group-text" id="basic-addon"> */}
   {/* <i className="fa fa-user prefix"></i> */}
 {/* </span> */}
</div>
<MDBContainer type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon" >{this.state.phoneNumber}</MDBContainer>
<div className="input-group">
<div className="input-group-prepend">
 <span className="input-group-text" id="basic-addon">
   <i className="fa fa-user prefix"></i>
 </span>
</div>
<MDBContainer label="E-mail address" outline icon="envelope" />
</div>

<MDBContainer label="password" outline icon="" />

</div>
<div>
<MDBContainer label="phoneNumber" outline icon="" >{this.state.phoneNumber}</MDBContainer>

</div>
<div>
<MDBContainer label="specialty" outline icon="" />
</div> 
<div>
<MDBContainer label="Location" outline icon="" />
</div>
<button   className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3"
              href="/Profile" onClick={this.onClick.bind(this)}
            >
              Edit
            </button>

</div>

);
  
  }
}
export default EditProfile