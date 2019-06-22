import React, { Component } from "react";
import { storage } from "../firebase/firebase";

class ProfilePage extends Component {
     constructor(props){
      super(props);
      this.state = {
        image: null,
        url: '',
      
      };
      this.onChange = this.onChange.bind(this);
    }
    // componentDidMount() {
    //   this.setState({
    //     url: this.props.url
    //   });
    // }
    onChange = e => {
      if (e.target.files[0]) {
        const {image} = this.state ;
        this.setState ( () =>({ image }));
      }
    }
  
    // onUpload() {
    //   const { image } = this.state;
    //   const upload = storage.ref(`images/${image}`).put(image);
    //   upload.on(
    //     'state_changed',
    //     (snapshot) => {
    //       const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
    //       this.setState({ progress });
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       // storage.ref('images').child(image.name).getDownloadURL().then((url) => {
    //       //   setTimeout(() => {
    //       //     this.setState({ url, progress: 0 }, () => this.props.onChange(this.state.url));
    //       //   }, 1000);
    //       // });
    //     }
    //   );
    // }
  
    render() {
      const style = {
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      };
  
      return (
        <div style ={style}>
            <input type="file" onChange = {this.onChange}/>
              <button type="button" >
                Upload Photo
              </button>

        </div>
      );
    }
  }
  
  
  export default ProfilePage;
  
  