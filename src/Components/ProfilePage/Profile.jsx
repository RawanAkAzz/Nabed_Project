import React, { Component } from "react";
import { storage } from "../firebase/firebase";
import { MDBInput } from "mdbreact";


class ProfilePage extends Component {
     constructor(props){
     super(props);
      this.state = {
        image: null,
        url: '',
        progress: 0
      };
    }
    componentDidMount() {
      this.setState({
        url: this.props.url
      });
    }
    onChange(e) {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
      }
    }
  
    onUpload() {
      const { image } = this.state;
      const upload = storage.ref(`images/${image}`).put(image);
      upload.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
          this.setState({ progress });
        },
        (error) => {
          console.log(error);
        },
        () => {
          // storage.ref('images').child(image.name).getDownloadURL().then((url) => {
          //   setTimeout(() => {
          //     this.setState({ url, progress: 0 }, () => this.props.onChange(this.state.url));
          //   }, 1000);
          // });
        }
      );
    }
  
    render() {
      const style = {
        float: 'left',
       // display: 'flex',
        //alignItems: 'center',
        justifyContent: 'left'
      };
      // const style = {
      //   float: 'left',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'left'
      // };
  
      return (
     
      //    <div className="left" style ={style}>
      //   <progress value ={this.state.progress} max ="100"/>
      //       <input type="file" onChange = {this.onChange}/>
      //         <button onUpload= {this.onUpload} type="button">
      //           Upload Photo
      //         </button>
      //       <img src = {this.state.url || 'https://via.placeholder'
      //   }  height = "200" width = "200" />
      //  </div> 
      <div className="form-row mb-3 col-auto mb-6">
      <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className="fa fa-user prefix"></i>
        </span>
      </div>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username"  />

    </div>
          <MDBInput label="E-mail address" background icon="envelope" > </MDBInput>

 </div>
    
    
  
    
      ); 
       

  }
  }
  
  
  export default ProfilePage;
  
  

 