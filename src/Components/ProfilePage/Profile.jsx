import React, { Component } from "react";
import { storage } from "../firebase/firebase";
import { MDBInput } from "mdbreact";
import $ from "jquery";


class ProfilePage extends Component {
     constructor(props){
     super(props);
      this.state = {
        image: null,
        url: "",
        name:"",
        doctor:{

        }
             
  
      }
      this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
      if (e.target.files[0]) {
        const image = e.target.files[0];
  
        this.setState(() => ({ image }));
      }
    }
    
    
  
    handleUpload() {
      const { image } = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        `state_changed`,
        snapshot => {},
        error => {},
        () => {
          storage
            .ref(`images`)
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
              // console.log(url);
            });
        }
      );
    }
  changed(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    // componentDidMount() {
    //   fetch("http://localhost:5001/Doctors")
    //   .then(response => response.json())
    //   .then(users => this.setState({ users }));
    //   console.log("users")
    // }
    onChange(e) {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
      }
    }
  
    onClick(event) {
      event.preventDefault();
  
      console.log(this.state)
      var that = this;
      $.ajax({
        url: "https://app.asana.com/-/api/0.1/workspaces/",//q url
        type: 'GET',
        success: function(res) {
            console.log(res);
            this.setState({
            doctor:res

            })
        }
    });
    
    }
    render() {
     
      return (  
      
   <div>    <input type="file" name="image" onChange={this.handleChange} />
              <br />
              <br />
              <button onClick={this.handleUpload.bind(this)}>Upload</button>
              <img
                src={this.state.url || "https://via.placeholder.com/150"}
                alt="uploaded image"
                height="150"
                width="200"
              />
        <div className="form-row mb-3 col-auto mb-6 "> 
         
            
            </div>
         <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fa fa-user prefix"></i>
            </span>
          </div>
          <input label="text" className="form-control" placeholder="Your name" aria-label="email" aria-describedby="basic-addon" ></input>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            {/* <span className="input-group-text" id="basic-addon"> */}
              {/* <i className="fa fa-user prefix"></i> */}
            {/* </span> */}
          </div>
          {/* <h1 type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon" >{user.name}</h1> */}
          <MDBInput label="E-mail address" outline icon="envelope" />
        </div>
        <div>
        <MDBInput label="password" outline icon="" />

        </div>
        <div>
        <MDBInput label="phoneNumber" outline icon="" />

        </div>
        <div>
        <MDBInput label="specialty" outline icon="" />
        </div> 
        <div>
        <MDBInput label="Location" outline icon="" />
        </div>
     </div>
     
      );
}
  
}
  export default ProfilePage;
  